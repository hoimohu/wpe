/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
 * All rights reserved.
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

'use strict';

goog.provide('Blockly.Blocks.basic');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['element_webpageeditor-doctypehtml'] = {
    init: function () {
        this.jsonInit({
            "id": "element_webpageeditor-doctypehtml",
            "message0": Blockly.Msg.DOCTYPEHTML,
            "category": Blockly.Categories.basic,
            "extensions": ["colours_basic", "shape_hat"]
        });
    }
};

Blockly.Blocks['element_html'] = {
    /**
     * HTML Element
     * @this Blockly.Block
     */
    init: function () {
        this.jsonInit({
            "id": "element_html",
            "message0": Blockly.Msg.ELEMENT_HTML_TOP,
            "message1": Blockly.Msg.ELEMENT_HTML_BOTTOM,
            "args0": [
                {
                    "type": "input_value",
                    "name": "ATTRIBUTE",
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "SUBSTACK"
                },
                {
                    "type": "input_dummy"
                }
            ],
            "category": Blockly.Categories.basic,
            "extensions": ["colours_basic", "shape_end"]
        });
    }
};
Blockly.Blocks['element_head'] = {
    /**
     * HEAD Element
     * @this Blockly.Block
     */
    init: function () {
        this.jsonInit({
            "id": "element_head",
            "message0": Blockly.Msg.ELEMENT_HEAD_TOP,
            "message1": Blockly.Msg.ELEMENT_HEAD_BOTTOM,
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "SUBSTACK"
                }
            ],
            "nextStatement": "element_body",
            "category": Blockly.Categories.basic,
            "extensions": ["colours_basic", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_body'] = {
    /**
     * BODY Element
     * @this Blockly.Block
     */
    init: function () {
        this.jsonInit({
            "id": "element_body",
            "message0": Blockly.Msg.ELEMENT_BODY_TOP,
            "message1": Blockly.Msg.ELEMENT_BODY_BOTTOM,
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
            "category": Blockly.Categories.basic,
            "extensions": ["colours_basic", "shape_end"]
        });
    }
};
