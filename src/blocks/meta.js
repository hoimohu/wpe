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

goog.provide('Blockly.Blocks.meta');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['element_base'] = {
    init: function () {
        this.jsonInit({
            "id": "element_base",
            "message0": Blockly.Msg.ELEMENT_BASE,
            "args0": [
                {
                    "type": "input_value",
                    "name": "ATTRIBUTE"
                }
            ],
            "category": Blockly.Categories.meta,
            "extensions": ["colours_meta", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_link'] = {
    init: function () {
        this.jsonInit({
            "id": "element_link",
            "message0": Blockly.Msg.ELEMENT_LINK,
            "args0": [
                {
                    "type": "input_value",
                    "name": "ATTRIBUTE"
                }
            ],
            "category": Blockly.Categories.meta,
            "extensions": ["colours_meta", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_meta'] = {
    /**
     * META Element
     * @this Blockly.Block
     */
    init: function () {
        this.jsonInit({
            "id": "element_meta",
            "message0": Blockly.Msg.ELEMENT_META,
            "args0": [
                {
                    "type": "input_value",
                    "name": "ATTRIBUTE"
                }
            ],
            "category": Blockly.Categories.meta,
            "extensions": ["colours_meta", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_style'] = {
    init: function () {
        this.jsonInit({
            "id": "element_style",
            "message0": Blockly.Msg.ELEMENT_STYLE_TOP,
            "message1": Blockly.Msg.ELEMENT_STYLE_BOTTOM,
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "SUBSTACK"
                }
            ],
            "category": Blockly.Categories.meta,
            "extensions": ["colours_meta", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_title'] = {
    init: function () {
        this.jsonInit({
            "id": "element_title",
            "message0": Blockly.Msg.ELEMENT_TITLE_TOP,
            "message1": Blockly.Msg.ELEMENT_TITLE_BOTTOM,
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "SUBSTACK"
                }
            ],
            "category": Blockly.Categories.meta,
            "extensions": ["colours_meta", "shape_statement"]
        });
    }
};