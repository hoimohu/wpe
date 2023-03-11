/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview XML reader and writer.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

/**
 * @name Blockly.Html
 * @namespace
 **/
goog.provide('Blockly.Html');

goog.require('Blockly.Events.BlockCreate');
goog.require('Blockly.Events.VarCreate');

goog.require('goog.asserts');
goog.require('goog.dom');


/**
 * Encode a block tree as XML.
 * @param {!Blockly.Workspace} workspace The workspace containing blocks.
 * @param {boolean=} opt_noId True if the encoder should skip the block IDs.
 * @return {!Element} XML document.
 */
Blockly.Html.workspaceToDom = function (workspace, opt_noId) {
    var xml = goog.dom.createDom('xml');
    // xml.appendChild(Blockly.Html.variablesToDom(workspace.getAllVariables()));
    var comments = workspace.getTopComments(true).filter(function (topComment) {
        return topComment instanceof Blockly.WorkspaceComment;
    });
    var blocks = workspace.getTopBlocks(true);
    for (var i = 0, block; block = blocks[i]; i++) {
        xml.appendChild(Blockly.Html.blockToDom(block, opt_noId, xml));
    }
    var htmlTag = xml.getElementsByTagName('html')[0];
    for (var i = 0, comment; comment = comments[i]; i++) {
        var commentElement = goog.dom.createDom('scratchcomment', null, comment.getText().replace(/(^\s*|\s*$)/g, ''));
        if (htmlTag) {
            htmlTag.appendChild(commentElement);
        } else {
            xml.appendChild(commentElement);
        }
    }
    comments = null;
    return xml;
};

/**
 * Encode a list of variables as XML.
 * @param {!Array.<!Blockly.VariableModel>} variableList List of all variable
 *     models.
 * @return {!Element} List of XML elements.
 */
Blockly.Html.variablesToDom = function (variableList) {
    var variables = goog.dom.createDom('variables');
    for (var i = 0, variable; variable = variableList[i]; i++) {
        var element = goog.dom.createDom('variable', null, variable.name);
        element.setAttribute('type', variable.type);
        element.setAttribute('id', variable.getId());
        element.setAttribute('islocal', variable.isLocal);
        element.setAttribute('isCloud', variable.isCloud);
        variables.appendChild(element);
    }
    return variables;
};

/**
 * Encode a block subtree as XML with XY coordinates.
 * @param {!Blockly.Block} block The root block to encode.
 * @param {boolean=} opt_noId True if the encoder should skip the block ID.
 * @return {!Element} Tree of XML elements.
 */
Blockly.Html.blockToDomWithXY = function (block, opt_noId) {
    var width;  // Not used in LTR.
    if (block.workspace.RTL) {
        width = block.workspace.getWidth();
    }
    var element = Blockly.Html.blockToDom(block, opt_noId);
    var xy = block.getRelativeToSurfaceXY();
    element.setAttribute('x',
        Math.round(block.workspace.RTL ? width - xy.x : xy.x));
    element.setAttribute('y', Math.round(xy.y));
    return element;
};

/**
 * Encode a variable field as XML.
 * @param {!Blockly.FieldVariable} field The field to encode.
 * @return {?Element} XML element, or null if the field did not need to be
 *     serialized.
 * @private
 */
Blockly.Html.fieldToDomVariable_ = function (field) {
    var id = field.getValue();
    // The field had not been initialized fully before being serialized.
    // This can happen if a block is created directly through a call to
    // workspace.newBlock instead of from XML.
    // The new block will be serialized for the first time when firing a block
    // creation event.
    if (id == null) {
        field.initModel();
        id = field.getValue();
    }
    // Get the variable directly from the field, instead of doing a lookup.  This
    // will work even if the variable has already been deleted.  This can happen
    // because the flyout defers deleting blocks until the next time the flyout is
    // opened.
    var variable = field.getVariable();

    if (!variable) {
        throw Error('Tried to serialize a variable field with no variable.');
    }
    var container = goog.dom.createDom('field', null, variable.name);
    container.setAttribute('name', field.name);
    container.setAttribute('id', variable.getId());
    container.setAttribute('variabletype', variable.type);
    return container;
};

/**
 * Encode a field as XML.
 * @param {!Blockly.Field} field The field to encode.
 * @param {!Blockly.Workspace} workspace The workspace that the field is in.
 * @return {?Element} XML element, or null if the field did not need to be
 *     serialized.
 * @private
 */
Blockly.Html.fieldToDom_ = function (field) {
    if (field.name && field.SERIALIZABLE) {
        if (field.referencesVariables()) {
            return Blockly.Html.fieldToDomVariable_(field);
        } else {
            var container = goog.dom.createDom('field', null, field.getValue());
            container.setAttribute('name', field.name);
            return container;
        }
    }
    return null;
};

/**
 * Encode all of a block's fields as XML and attach them to the given tree of
 * XML elements.
 * @param {!Blockly.Block} block A block with fields to be encoded.
 * @param {!Element} element The XML element to which the field DOM should be
 *     attached.
 * @private
 */
Blockly.Html.allFieldsToDom_ = function (block, element) {
    for (var i = 0, input; input = block.inputList[i]; i++) {
        for (var j = 0, field; field = input.fieldRow[j]; j++) {
            var fieldDom = Blockly.Html.fieldToDom_(field);
            if (fieldDom) {
                element.appendChild(fieldDom);
            }
        }
    }
};

/**
 * Encode a block subtree as XML.
 * @param {!Blockly.Block} block The root block to encode.
 * @param {boolean=} opt_noId True if the encoder should skip the block ID.
 * @return {!Element} Tree of XML elements.
 */
Blockly.Html.blockToDom = function (block, opt_noId, parent) {
    var element;
    if (block.type === 'doctype_html') {
        element = goog.dom.createDom('webpageeditor-doctypehtml');
    } else if (block.type.match(/^element_/)) {
        element = goog.dom.createDom(block.type.replace(/^element_/, ''));
    } else {
        element = goog.dom.createDom(block.isShadow() ? 'shadow' : 'block');
        element.setAttribute('type', block.type);
    }
    if (block.mutationToDom) {
        // Custom data for an advanced block.
        var mutation = block.mutationToDom();
        if (mutation && (mutation.hasChildNodes() || mutation.hasAttributes())) {
            element.appendChild(mutation);
        }
    }

    Blockly.Html.scratchCommentToDom_(block, parent);

    for (var i = 0, input; input = block.inputList[i]; i++) {
        if (input.type == Blockly.DUMMY_INPUT) {
            continue;
        } else {
            var childBlock = input.connection.targetBlock();
            if (input.type == Blockly.INPUT_VALUE) {
                if (childBlock && childBlock.type.match(/^attributes?_/)) {
                    (function setAttribute(attributeBlock) {
                        if (attributeBlock.type === 'attributes_join') {
                            for (var i2 = 0; i2 < attributeBlock.inputList.length; i2++) {
                                if (attributeBlock.inputList[i2].type == Blockly.INPUT_VALUE) {
                                    var attributeChild = attributeBlock.inputList[i2].connection.targetBlock();
                                    if (attributeChild) {
                                        setAttribute(attributeBlock.inputList[i2].connection.targetBlock());
                                    }
                                }
                            }
                        } else {
                            var value = '';
                            for (var i2 = 0; i2 < attributeBlock.inputList.length; i2++) {
                                if (attributeBlock.inputList[i2].type == Blockly.INPUT_VALUE) {
                                    var attributeChild = attributeBlock.inputList[i2];
                                    var fields = goog.dom.createDom('fields');
                                    Blockly.Html.allFieldsToDom_(attributeChild.connection.targetBlock(), fields);
                                    value += fields.innerText;
                                }
                            }
                            element.setAttribute(attributeBlock.type.replace(/^attribute_/, ''), value);
                        }
                    })(childBlock);
                } else if (childBlock) {
                    var fields = goog.dom.createDom('fields');
                    Blockly.Html.allFieldsToDom_(childBlock, fields);
                    element.innerText = fields.innerText;
                }
            } else if (input.type == Blockly.NEXT_STATEMENT) {
                if (childBlock) {
                    element.appendChild(Blockly.Html.blockToDom(childBlock, opt_noId, element));
                }
            }
        }
    }

    var nextBlock = block.getNextBlock();
    if (nextBlock) {
        parent.appendChild(element);
        return Blockly.Html.blockToDom(nextBlock, opt_noId, parent);
    }
    var shadow = block.nextConnection && block.nextConnection.getShadowDom();
    if (shadow && (!nextBlock || !nextBlock.isShadow())) {
        container.appendChild(Blockly.Html.cloneShadow_(shadow));
    }
    return element;
};

/**
 * Encode a ScratchBlockComment as XML.
 * @param {!Blockly.ScratchBlockComment} block The block possibly containing
 *     a comment to encode.
 * @param {!Element} element The XML element to which the comment should
 *     encoding should be attached.
 * @private
 */
Blockly.Html.scratchCommentToDom_ = function (block, parent) {
    var commentText = block.getCommentText().replace(/(^\s*|\s*$)/g, '');
    if (commentText) {
        var commentElement = goog.dom.createDom('scratchcomment', null, commentText);
        parent.appendChild(commentElement);
    }
};

/**
 * Deeply clone the shadow's DOM so that changes don't back-wash to the block.
 * @param {!Element} shadow A tree of XML elements.
 * @return {!Element} A tree of XML elements.
 * @private
 */
Blockly.Html.cloneShadow_ = function (shadow) {
    shadow = shadow.cloneNode(true);
    // Walk the tree looking for whitespace.  Don't prune whitespace in a tag.
    var node = shadow;
    var textNode;
    while (node) {
        if (node.firstChild) {
            node = node.firstChild;
        } else {
            while (node && !node.nextSibling) {
                textNode = node;
                node = node.parentNode;
                if (textNode.nodeType == 3 && textNode.data.trim() == '' &&
                    node.firstChild != textNode) {
                    // Prune whitespace after a tag.
                    goog.dom.removeNode(textNode);
                }
            }
            if (node) {
                textNode = node;
                node = node.nextSibling;
                if (textNode.nodeType == 3 && textNode.data.trim() == '') {
                    // Prune whitespace before a tag.
                    goog.dom.removeNode(textNode);
                }
            }
        }
    }
    return shadow;
};

/**
 * Converts a DOM structure into plain text.
 * Currently the text format is fairly ugly: all one line with no whitespace.
 * @param {!Element} dom A tree of XML elements.
 * @return {string} Text representation.
 */
Blockly.Html.domToText = function (dom) {
    var oSerializer = new XMLSerializer();
    return oSerializer.serializeToString(dom);
};

/**
 * Converts a DOM structure into properly indented text.
 * @param {!Element} dom A tree of XML elements.
 * @return {string} Text representation.
 */
Blockly.Html.domToPrettyText = function (dom) {
    var styleElements = dom.getElementsByTagName('style');
    for (var i1 = 0; i1 < styleElements.length; i1++) {
        var textElements = styleElements[i1].getElementsByTagName('webpageeditor-text');
        for (var i2 = 0; i2 < textElements.length; i2++) {
            textElements[i2].innerHTML = textElements[i2].innerHTML.replace(/&lt;/g, 'webpageeditorstyle-lt;').replace(/&gt;/g, 'webpageeditorstyle-gt;');
        }
    }

    // This function is not guaranteed to be correct for all XML.
    // But it handles the XML that Blockly generates.
    var blob = Blockly.Html.domToText(dom);
    // Place every open and close tag on its own line.
    var lines = blob.split('<');
    // Indent every line.
    var indent = '';
    for (var i = 1; i < lines.length; i++) {
        var line = lines[i];
        if (line[0] == '/') {
            indent = indent.substring(2);
        }
        lines[i] = indent + '<' + line;
        if (line[0] != '/' && line.slice(-2) != '/>') {
            indent += '  ';
        }
    }
    // Pull simple tags back together.
    // E.g. <foo></foo>
    var text = lines.join('\n');
    text = text.replace(/(<(\w+)\b[^>]*>[^\n]*)\n *<\/\2>/g, '$1</$2>')
        .replace(/<scratchcomment>/g, '<!-- ').replace(/<\/scratchcomment>/g, ' -->')
        .replace(/<\/?webpageeditor-text>/g, '')
        .replace(/webpageeditorstyle-lt;/g, '<').replace(/webpageeditorstyle-gt;/g, '>')
        .replace(/<webpageeditor-doctypehtml>/g, '<!DOCTYPE html>').replace(/<\/webpageeditor-doctypehtml>/g, '')
        .replace(/ \/>/g, '>')
        .replace(/\n  /g, '\n')
        .replace(/(?<=<title>)\n\s*(?=.+\n\s*<\/title>)/g, '').replace(/(?<=<title>.+)\n\s*(?=<\/title>)/g, '')
        .replace(/^\n/, '')
        .replace(/\n(\s+)?\n/g, '\n')
        .replace(/(^<xml.*>\n?|\n?<\/xml>$)/g, '');
    // Trim leading blank line.
    return text;
};

Blockly.Html.htmlToXml = function (text) {
    var parser = new DOMParser();
    var dom;
    if (text.match(/<html.*>/) && text.match(/<\/html>/) &&
        text.match(/<head.*>/) && text.match(/<\/head>/) &&
        text.match(/<body.*>/) && text.match(/<\/body>/)) {
        dom = parser.parseFromString(text, 'text/html');
    } else {
        dom = parser.parseFromString(text, 'application/xml');
    }
    if (dom.getElementsByTagName('parsererror').length > 0) return;
    var parentXml = goog.dom.createDom('xml');

    (function loop(node, parentNode, previousNode, commentNode) {
        // 新しい要素
        var newNode;
        if (node.nodeType === Node.DOCUMENT_TYPE_NODE) {
            newNode = goog.dom.createDom('block');
            newNode.setAttribute('type', 'element_webpageeditor-doctypehtml');
        } else if (node.nodeType === Node.TEXT_NODE) {
            // テキストの場合
            var textSplit = node.textContent.split(/\n+\s*/g);
            var textParent = parentNode;
            var textPrevious = previousNode;
            for (var index = 0; index < textSplit.length; index++) {
                var text = textSplit[index];
                if (text) {
                    newNode = goog.dom.createDom('block');
                    newNode.setAttribute('type', 'element_webpageeditor-text');
                    var value = goog.dom.createDom('value');
                    value.setAttribute('name', 'VALUE');
                    var shadow = goog.dom.createDom('shadow');
                    shadow.setAttribute('type', 'text');
                    var field = goog.dom.createDom('field');
                    field.setAttribute('name', 'TEXT');
                    newNode.appendChild(value);
                    value.appendChild(shadow);
                    shadow.appendChild(field);
                    field.textContent = text;
                    if (textParent) {
                        // 挿入
                        textParent.appendChild(newNode);
                        textParent = null;
                        textPrevious = newNode;
                    } else {
                        var textNext = goog.dom.createDom('next');
                        textNext.appendChild(newNode);
                        textPrevious.appendChild(textNext);
                        textPrevious = newNode;
                    }
                }
            }
        } else if (node.nodeType === Node.COMMENT_NODE) {
            // コメントの場合
            newNode = goog.dom.createDom('comment');
            newNode.setAttribute('pinned', true);
            newNode.setAttribute('h', 200);
            newNode.setAttribute('w', 200);
            newNode.setAttribute('minimized', false);
            newNode.textContent = node.textContent.match(/(?<=^\s?).*(?=\s?$)/);
        } else {
            // 要素の場合
            var blockName = 'element_' + node.nodeName.toLowerCase();
            if (!Object.hasOwn(Blockly.Blocks, blockName)) {
                Blockly.Blocks[blockName] = {
                    init: function () {
                        this.jsonInit({
                            "id": blockName,
                            "message0": "<" + node.nodeName.toLowerCase() + " %1 %2 > %3 %4",
                            "message1": "</" + node.nodeName.toLowerCase() + ">",
                            "args0": [
                                {
                                    "type": "input_dummy"
                                },
                                {
                                    "type": "input_value",
                                    "name": "ATTRIBUTE"
                                },
                                {
                                    "type": "input_dummy"
                                },
                                {
                                    "type": "input_statement",
                                    "name": "SUBSTACK"
                                }
                            ],
                            "category": Blockly.Categories.others,
                            "extensions": ["colours_others", "shape_statement"]
                        });
                    }
                };
            }
            newNode = goog.dom.createDom('block');
            newNode.setAttribute('type', blockName);
            if (node.hasAttributes()) {
                setNodeAttributes(node, newNode);
            }
        }

        // コメント
        if (commentNode) {
            if (newNode && newNode.nodeName !== 'COMMENT') {
                newNode.appendChild(commentNode);
            } else {
                newNode = commentNode;
            }
        }

        if (newNode && newNode.getAttribute('type') !== 'element_webpageeditor-text' && newNode.nodeName !== 'COMMENT') {
            if (node.childNodes.length > 0) {
                // 子要素
                var substack = goog.dom.createDom('statement');
                substack.setAttribute('name', 'SUBSTACK');
                newNode.appendChild(substack);
                loop(node.childNodes[0], substack);
            }
            if (parentNode) {
                // 挿入
                parentNode.appendChild(newNode);
            } else {
                var next = goog.dom.createDom('next');
                next.appendChild(newNode);
                previousNode.appendChild(next);
            }
        }
        if (node.nextSibling) {
            // 次の要素
            if (newNode) {
                if (newNode.nodeName !== 'COMMENT') {
                    loop(node.nextSibling, null, newNode);
                } else {
                    if (parentNode) {
                        loop(node.nextSibling, parentNode, null, newNode);
                    } else {
                        loop(node.nextSibling, null, previousNode, newNode);
                    }
                }
            } else {
                if (parentNode) {
                    loop(node.nextSibling, parentNode);
                } else {
                    loop(node.nextSibling, null, previousNode);
                }
            }
        } else if (newNode && newNode.nodeName === 'COMMENT') {
            parentXml.appendChild(newNode);
        }
    })(dom.childNodes[0], parentXml);

    function setNodeAttributes(node, newNode) {
        var attrs = node.attributes;
        if (attrs.length >= 2) {
            // 属性が2つ以上の場合
            var maxcount = getBaseLogCeil(2, attrs.length);
            var value = goog.dom.createDom('value');
            var counterArray = new Array(attrs.length);
            value.setAttribute('name', 'ATTRIBUTE');
            joinAttributes(attrs, value, 0, maxcount, counterArray);
            newNode.appendChild(value);
        } else {
            var parentValue = goog.dom.createDom('value');
            parentValue.setAttribute('name', 'ATTRIBUTE');
            parentValue.appendChild(createNodeAttribute(attrs[0].name, attrs[0].value));
            newNode.appendChild(parentValue);
        }
    }
    function joinAttributes(attributes, parent, counter, maxcount, counterArray) {
        if (counterArray.length === 0) return;
        if (counter !== maxcount) {
            var block = goog.dom.createDom('block');
            block.setAttribute('type', 'attributes_join');
            var value = goog.dom.createDom('value');
            value.setAttribute('name', 'ATTRIBUTE1');
            var shadow = goog.dom.createDom('value');
            shadow.setAttribute('name', 'ATTRIBUTE2');
            block.appendChild(value);
            block.appendChild(shadow);
            joinAttributes(attributes, value, counter + 1, maxcount, counterArray);
            joinAttributes(attributes, shadow, counter + 1, maxcount, counterArray);
            parent.appendChild(block);
        } else {
            var thisAttribute = attributes[attributes.length - counterArray.length];
            parent.appendChild(createNodeAttribute(thisAttribute.name, thisAttribute.value));
            counterArray.pop();
        }
    }
    function createNodeAttribute(name, content) {
        var attributeName = 'attribute_' + name;
        if (!Object.hasOwn(Blockly.Blocks, attributeName)) {
            Blockly.Blocks[attributeName] = {
                init: function () {
                    this.jsonInit({
                        "message0": name + "=\" %1 \"",
                        "args0": [
                            {
                                "type": "input_value",
                                "name": "VALUE",
                                "check": "String"
                            }
                        ],
                        "category": Blockly.Categories.attributes,
                        "extensions": ["colours_attributes", "output_string"]
                    });
                }
            };
        }
        var block = goog.dom.createDom('block');
        block.setAttribute('type', attributeName);
        var value = goog.dom.createDom('value');
        value.setAttribute('name', 'VALUE');
        var shadow = goog.dom.createDom('shadow');
        shadow.setAttribute('type', 'text');
        var field = goog.dom.createDom('field');
        field.setAttribute('name', 'TEXT');
        field.textContent = content;
        block.appendChild(value);
        value.appendChild(shadow);
        shadow.appendChild(field);
        return block;
    }
    function getBaseLogCeil(x, y) {
        return Math.ceil(Math.log(y) / Math.log(x));
    }
    return parentXml;
};

/**
 * Converts plain text into a DOM structure.
 * Throws an error if XML doesn't parse.
 * @param {string} text Text representation.
 * @return {!Element} A tree of XML elements.
 */
Blockly.Html.textToDom = function (text) {
    var oParser = new DOMParser();
    var dom = oParser.parseFromString(text, 'text/xml');
    // The DOM should have one and only one top-level node, an XML tag.
    if (!dom || !dom.firstChild ||
        dom.firstChild.nodeName.toLowerCase() != 'xml' ||
        dom.firstChild !== dom.lastChild) {
        // Whatever we got back from the parser is not XML.
        goog.asserts.fail('Blockly.Html.textToDom did not obtain a valid XML tree.');
    }
    return dom.firstChild;
};

/**
 * Clear the given workspace then decode an XML DOM and
 * create blocks on the workspace.
 * @param {!Element} xml XML DOM.
 * @param {!Blockly.Workspace} workspace The workspace.
 * @return {Array.<string>} An array containing new block ids.
 */
Blockly.Html.clearWorkspaceAndLoadFromHtml = function (xml, workspace) {
    workspace.setResizesEnabled(false);
    workspace.setToolboxRefreshEnabled(false);
    workspace.clear();
    var blockIds = Blockly.Html.domToWorkspace(xml, workspace);
    workspace.setResizesEnabled(true);
    workspace.setToolboxRefreshEnabled(true);
    return blockIds;
};

/**
 * Decode an XML DOM and create blocks on the workspace.
 * @param {!Element} xml XML DOM.
 * @param {!Blockly.Workspace} workspace The workspace.
 * @return {Array.<string>} An array containing new block IDs.
 */
Blockly.Html.domToWorkspace = function (xml, workspace) {
    if (xml instanceof Blockly.Workspace) {
        var swap = xml;
        xml = workspace;
        workspace = swap;
        console.warn('Deprecated call to Blockly.Html.domToWorkspace, ' +
            'swap the arguments.');
    }
    var width;  // Not used in LTR.
    if (workspace.RTL) {
        width = workspace.getWidth();
    }
    var newBlockIds = [];  // A list of block IDs added by this call.
    Blockly.Field.startCache();
    // Safari 7.1.3 is known to provide node lists with extra references to
    // children beyond the lists' length.  Trust the length, do not use the
    // looping pattern of checking the index for an object.
    var childCount = xml.childNodes.length;
    var existingGroup = Blockly.Events.getGroup();
    if (!existingGroup) {
        Blockly.Events.setGroup(true);
    }

    // Disable workspace resizes as an optimization.
    if (workspace.setResizesEnabled) {
        workspace.setResizesEnabled(false);
    }
    var variablesFirst = true;
    try {
        for (var i = 0; i < childCount; i++) {
            var xmlChild = xml.childNodes[i];
            var name = xmlChild.nodeName.toLowerCase();
            if (name == 'block' ||
                (name == 'shadow' && !Blockly.Events.recordUndo)) {
                // Allow top-level shadow blocks if recordUndo is disabled since
                // that means an undo is in progress.  Such a block is expected
                // to be moved to a nested destination in the next operation.
                var block = Blockly.Html.domToBlock(xmlChild, workspace);
                newBlockIds.push(block.id);
                var blockX = xmlChild.hasAttribute('x') ?
                    parseInt(xmlChild.getAttribute('x'), 10) : 10;
                var blockY = xmlChild.hasAttribute('y') ?
                    parseInt(xmlChild.getAttribute('y'), 10) : 10;
                if (!isNaN(blockX) && !isNaN(blockY)) {
                    block.moveBy(workspace.RTL ? width - blockX : blockX, blockY);
                    if (block.comment && typeof block.comment === 'object') {
                        var commentXY = block.comment.getXY();
                        var commentWidth = block.comment.getBubbleSize().width;
                        block.comment.moveTo(block.workspace.RTL ? width - commentXY.x - commentWidth : commentXY.x, commentXY.y);
                    }
                }
                variablesFirst = false;
            } else if (name == 'shadow') {
                goog.asserts.fail('Shadow block cannot be a top-level block.');
                variablesFirst = false;
            } else if (name == 'comment') {
                if (workspace.rendered) {
                    Blockly.WorkspaceCommentSvg.fromXml(xmlChild, workspace, width);
                } else {
                    Blockly.WorkspaceComment.fromXml(xmlChild, workspace);
                }
            } else if (name == 'variables') {
                if (variablesFirst) {
                    Blockly.Html.domToVariables(xmlChild, workspace);
                } else {
                    throw Error('\'variables\' tag must exist once before block and ' +
                        'shadow tag elements in the workspace XML, but it was found in ' +
                        'another location.');
                }
                variablesFirst = false;
            }
        }
    } finally {
        if (!existingGroup) {
            Blockly.Events.setGroup(false);
        }
        Blockly.Field.stopCache();
    }
    // Re-enable workspace resizing.
    if (workspace.setResizesEnabled) {
        workspace.setResizesEnabled(true);
    }
    return newBlockIds;
};

/**
 * Decode an XML DOM and create blocks on the workspace. Position the new
 * blocks immediately below prior blocks, aligned by their starting edge.
 * @param {!Element} xml The XML DOM.
 * @param {!Blockly.Workspace} workspace The workspace to add to.
 * @return {Array.<string>} An array containing new block IDs.
 */
Blockly.Html.appendDomToWorkspace = function (xml, workspace) {
    var bbox;  // Bounding box of the current blocks.
    // First check if we have a workspaceSvg, otherwise the blocks have no shape
    // and the position does not matter.
    if (workspace.hasOwnProperty('scale')) {
        var savetab = Blockly.BlockSvg.TAB_WIDTH;
        try {
            Blockly.BlockSvg.TAB_WIDTH = 0;
            bbox = workspace.getBlocksBoundingBox();
        } finally {
            Blockly.BlockSvg.TAB_WIDTH = savetab;
        }
    }
    // Load the new blocks into the workspace and get the IDs of the new blocks.
    var newBlockIds = Blockly.Html.domToWorkspace(xml, workspace);
    if (bbox && bbox.height) { // check if any previous block
        var offsetY = 0; // offset to add to y of the new block
        var offsetX = 0;
        var farY = bbox.y + bbox.height; //bottom position
        var topX = bbox.x; // x of bounding box
        // check position of the new blocks
        var newX = Infinity; // x of top corner
        var newY = Infinity; // y of top corner
        for (var i = 0; i < newBlockIds.length; i++) {
            var blockXY = workspace.getBlockById(newBlockIds[i]).getRelativeToSurfaceXY();
            if (blockXY.y < newY) {
                newY = blockXY.y;
            }
            if (blockXY.x < newX) { //if we align also on x
                newX = blockXY.x;
            }
        }
        offsetY = farY - newY + Blockly.BlockSvg.SEP_SPACE_Y;
        offsetX = topX - newX;
        // move the new blocks to append them at the bottom
        var width;  // Not used in LTR.
        if (workspace.RTL) {
            width = workspace.getWidth();
        }
        for (var i = 0; i < newBlockIds.length; i++) {
            var block = workspace.getBlockById(newBlockIds[i]);
            block.moveBy(workspace.RTL ? width - offsetX : offsetX, offsetY);
        }
    }
    return newBlockIds;
};

/**
 * Decode an XML block tag and create a block (and possibly sub blocks) on the
 * workspace.
 * @param {!Element} xmlBlock XML block element.
 * @param {!Blockly.Workspace} workspace The workspace.
 * @return {!Blockly.Block} The root block created.
 */
Blockly.Html.domToBlock = function (xmlBlock, workspace) {
    if (xmlBlock instanceof Blockly.Workspace) {
        var swap = xmlBlock;
        xmlBlock = workspace;
        workspace = swap;
        console.warn('Deprecated call to Blockly.Html.domToBlock, ' +
            'swap the arguments.');
    }
    // Create top-level block.
    Blockly.Events.disable();
    var variablesBeforeCreation = workspace.getAllVariables();
    try {
        var topBlock = Blockly.Html.domToBlockHeadless_(xmlBlock, workspace);
        // Generate list of all blocks.
        var blocks = topBlock.getDescendants(false);
        if (workspace.rendered) {
            // Hide connections to speed up assembly.
            topBlock.setConnectionsHidden(true);
            // Render each block.
            for (var i = blocks.length - 1; i >= 0; i--) {
                blocks[i].initSvg();
            }
            for (var i = blocks.length - 1; i >= 0; i--) {
                blocks[i].render(false);
            }
            // Populating the connection database may be deferred until after the
            // blocks have rendered.
            if (!workspace.isFlyout) {
                setTimeout(function () {
                    if (topBlock.workspace) {  // Check that the block hasn't been deleted.
                        topBlock.setConnectionsHidden(false);
                    }
                }, 1);
            }
            topBlock.updateDisabled();
            // Allow the scrollbars to resize and move based on the new contents.
            // TODO(@picklesrus): #387. Remove when domToBlock avoids resizing.
            workspace.resizeContents();
        } else {
            for (var i = blocks.length - 1; i >= 0; i--) {
                blocks[i].initModel();
            }
        }
    } finally {
        Blockly.Events.enable();
    }
    if (Blockly.Events.isEnabled()) {
        var newVariables = Blockly.Variables.getAddedVariables(workspace,
            variablesBeforeCreation);
        // Fire a VarCreate event for each (if any) new variable created.
        for (var i = 0; i < newVariables.length; i++) {
            var thisVariable = newVariables[i];
            Blockly.Events.fire(new Blockly.Events.VarCreate(thisVariable));
        }
        // Block events come after var events, in case they refer to newly created
        // variables.
        Blockly.Events.fire(new Blockly.Events.BlockCreate(topBlock));
    }
    return topBlock;
};

/**
 * Decode an XML list of variables and add the variables to the workspace.
 * @param {!Element} xmlVariables List of XML variable elements.
 * @param {!Blockly.Workspace} workspace The workspace to which the variable
 *     should be added.
 */
Blockly.Html.domToVariables = function (xmlVariables, workspace) {
    for (var i = 0, xmlChild; xmlChild = xmlVariables.children[i]; i++) {
        var type = xmlChild.getAttribute('type');
        var id = xmlChild.getAttribute('id');
        var isLocal = xmlChild.getAttribute('islocal') == 'true';
        var isCloud = xmlChild.getAttribute('iscloud') == 'true';
        var name = xmlChild.textContent;

        if (typeof (type) === undefined || type === null) {
            throw Error('Variable with id, ' + id + ' is without a type');
        }
        workspace.createVariable(name, type, id, isLocal, isCloud);
    }
};

/**
 * Decode an XML block tag and create a block (and possibly sub blocks) on the
 * workspace.
 * @param {!Element} xmlBlock XML block element.
 * @param {!Blockly.Workspace} workspace The workspace.
 * @return {!Blockly.Block} The root block created.
 * @private
 */
Blockly.Html.domToBlockHeadless_ = function (xmlBlock, workspace) {
    var block = null;
    var prototypeName = xmlBlock.getAttribute('type');
    goog.asserts.assert(
        prototypeName, 'Block type unspecified: %s', xmlBlock.outerHTML);
    var id = xmlBlock.getAttribute('id');
    block = workspace.newBlock(prototypeName, id);

    var blockChild = null;
    for (var i = 0, xmlChild; xmlChild = xmlBlock.childNodes[i]; i++) {
        if (xmlChild.nodeType == 3) {
            // Ignore any text at the <block> level.  It's all whitespace anyway.
            continue;
        }
        var input;

        // Find any enclosed blocks or shadows in this tag.
        var childBlockElement = null;
        var childShadowElement = null;
        for (var j = 0, grandchild; grandchild = xmlChild.childNodes[j]; j++) {
            if (grandchild.nodeType == 1) {
                if (grandchild.nodeName.toLowerCase() == 'block') {
                    childBlockElement = /** @type {!Element} */ (grandchild);
                } else if (grandchild.nodeName.toLowerCase() == 'shadow') {
                    childShadowElement = /** @type {!Element} */ (grandchild);
                }
            }
        }
        // Use the shadow block if there is no child block.
        if (!childBlockElement && childShadowElement) {
            childBlockElement = childShadowElement;
        }

        var name = xmlChild.getAttribute('name');
        switch (xmlChild.nodeName.toLowerCase()) {
            case 'mutation':
                // Custom data for an advanced block.
                if (block.domToMutation) {
                    block.domToMutation(xmlChild);
                    if (block.initSvg) {
                        // Mutation may have added some elements that need initializing.
                        block.initSvg();
                    }
                }
                break;
            case 'comment':
                var commentId = xmlChild.getAttribute('id');
                var bubbleX = parseInt(xmlChild.getAttribute('x'), 10);
                var bubbleY = parseInt(xmlChild.getAttribute('y'), 10);
                var minimized = xmlChild.getAttribute('minimized') || false;

                // Note bubbleX and bubbleY can be NaN, but the ScratchBlockComment
                // constructor will handle that.
                block.setCommentText(xmlChild.textContent, commentId, bubbleX, bubbleY,
                    minimized == 'true');

                var visible = xmlChild.getAttribute('pinned');
                if (visible && !block.isInFlyout) {
                    // Give the renderer a millisecond to render and position the block
                    // before positioning the comment bubble.
                    setTimeout(function () {
                        if (block.comment && block.comment.setVisible) {
                            block.comment.setVisible(visible == 'true');
                        }
                    }, 1);
                }
                var bubbleW = parseInt(xmlChild.getAttribute('w'), 10);
                var bubbleH = parseInt(xmlChild.getAttribute('h'), 10);
                if (!isNaN(bubbleW) && !isNaN(bubbleH) &&
                    block.comment && block.comment.setVisible) {
                    if (block.comment instanceof Blockly.ScratchBlockComment) {
                        block.comment.setSize(bubbleW, bubbleH);
                    } else {
                        block.comment.setBubbleSize(bubbleW, bubbleH);
                    }
                }
                break;
            case 'data':
                block.data = xmlChild.textContent;
                break;
            case 'title':
            // Titles were renamed to field in December 2013.
            // Fall through.
            case 'field':
                Blockly.Html.domToField_(block, name, xmlChild);
                break;
            case 'value':
            case 'statement':
                input = block.getInput(name);
                if (!input) {
                    console.warn('Ignoring non-existent input ' + name + ' in block ' +
                        prototypeName);
                    break;
                }
                if (childShadowElement) {
                    input.connection.setShadowDom(childShadowElement);
                }
                if (childBlockElement) {
                    blockChild = Blockly.Html.domToBlockHeadless_(childBlockElement,
                        workspace);
                    if (blockChild.outputConnection) {
                        input.connection.connect(blockChild.outputConnection);
                    } else if (blockChild.previousConnection) {
                        input.connection.connect(blockChild.previousConnection);
                    } else {
                        goog.asserts.fail(
                            'Child block does not have output or previous statement.');
                    }
                }
                break;
            case 'next':
                if (childShadowElement && block.nextConnection) {
                    block.nextConnection.setShadowDom(childShadowElement);
                }
                if (childBlockElement) {
                    goog.asserts.assert(block.nextConnection,
                        'Next statement does not exist.');
                    // If there is more than one XML 'next' tag.
                    goog.asserts.assert(!block.nextConnection.isConnected(),
                        'Next statement is already connected.');
                    blockChild = Blockly.Html.domToBlockHeadless_(childBlockElement,
                        workspace);
                    goog.asserts.assert(blockChild.previousConnection,
                        'Next block does not have previous statement.');
                    block.nextConnection.connect(blockChild.previousConnection);
                }
                break;
            default:
                // Unknown tag; ignore.  Same principle as HTML parsers.
                console.warn('Ignoring unknown tag: ' + xmlChild.nodeName);
        }
    }

    var inline = xmlBlock.getAttribute('inline');
    if (inline) {
        block.setInputsInline(inline == 'true');
    }
    var disabled = xmlBlock.getAttribute('disabled');
    if (disabled) {
        block.setDisabled(disabled == 'true' || disabled == 'disabled');
    }
    var deletable = xmlBlock.getAttribute('deletable');
    if (deletable) {
        block.setDeletable(deletable == 'true');
    }
    var movable = xmlBlock.getAttribute('movable');
    if (movable) {
        block.setMovable(movable == 'true');
    }
    var editable = xmlBlock.getAttribute('editable');
    if (editable) {
        block.setEditable(editable == 'true');
    }
    var collapsed = xmlBlock.getAttribute('collapsed');
    if (collapsed) {
        block.setCollapsed(collapsed == 'true');
    }
    if (xmlBlock.nodeName.toLowerCase() == 'shadow') {
        // Ensure all children are also shadows.
        var children = block.getChildren(false);
        for (var i = 0, child; child = children[i]; i++) {
            goog.asserts.assert(
                child.isShadow(), 'Shadow block not allowed non-shadow child.');
        }
        block.setShadow(true);
    }
    return block;
};

/**
 * Decode an XML variable field tag and set the value of that field.
 * @param {!Blockly.Workspace} workspace The workspace that is currently being
 *     deserialized.
 * @param {!Element} xml The field tag to decode.
 * @param {string} text The text content of the XML tag.
 * @param {!Blockly.FieldVariable} field The field on which the value will be
 *     set.
 * @private
 */
Blockly.Html.domToFieldVariable_ = function (workspace, xml, text, field) {
    var type = xml.getAttribute('variabletype') || '';
    // TODO (fenichel): Does this need to be explicit or not?
    if (type == '\'\'') {
        type = '';
    }

    var variable;
    // This check ensures that there is not both a potential variable and a real
    // variable with the same name and type.
    if (!workspace.getPotentialVariableMap() && !workspace.isFlyout &&
        workspace.getFlyout()) {
        var flyoutWs = workspace.getFlyout().getWorkspace();
        variable = Blockly.Variables.realizePotentialVar(text, type, flyoutWs, true);
    }
    if (!variable) {
        variable = Blockly.Variables.getOrCreateVariablePackage(workspace, xml.id,
            text, type);
    }

    // This should never happen :)
    if (type != null && type !== variable.type) {
        throw Error('Serialized variable type with id \'' +
            variable.getId() + '\' had type ' + variable.type + ', and ' +
            'does not match variable field that references it: ' +
            Blockly.Html.domToText(xml) + '.');
    }

    field.setValue(variable.getId());
};

/**
 * Decode an XML field tag and set the value of that field on the given block.
 * @param {!Blockly.Block} block The block that is currently being deserialized.
 * @param {string} fieldName The name of the field on the block.
 * @param {!Element} xml The field tag to decode.
 * @private
 */
Blockly.Html.domToField_ = function (block, fieldName, xml) {
    var field = block.getField(fieldName);
    if (!field) {
        console.warn('Ignoring non-existent field ' + fieldName + ' in block ' +
            block.type);
        return;
    }

    var workspace = block.workspace;
    var text = xml.textContent;
    if (field.referencesVariables()) {
        Blockly.Html.domToFieldVariable_(workspace, xml, text, field);
    } else {
        field.setValue(text);
    }
};

/**
 * Remove any 'next' block (statements in a stack).
 * @param {!Element} xmlBlock XML block element.
 */
Blockly.Html.deleteNext = function (xmlBlock) {
    for (var i = 0, child; child = xmlBlock.childNodes[i]; i++) {
        if (child.nodeName.toLowerCase() == 'next') {
            xmlBlock.removeChild(child);
            break;
        }
    }
};

// Export symbols that would otherwise be renamed by Closure compiler.
if (!goog.global['Blockly']) {
    goog.global['Blockly'] = {};
}
if (!goog.global['Blockly']['Html']) {
    goog.global['Blockly']['Html'] = {};
}
goog.global['Blockly']['Html']['domToText'] = Blockly.Html.domToText;
goog.global['Blockly']['Html']['domToWorkspace'] = Blockly.Html.domToWorkspace;
goog.global['Blockly']['Html']['textToDom'] = Blockly.Html.textToDom;
goog.global['Blockly']['Html']['workspaceToDom'] = Blockly.Html.workspaceToDom;
goog.global['Blockly']['Html']['clearWorkspaceAndLoadFromHtml'] =
    Blockly.Html.clearWorkspaceAndLoadFromHtml;
