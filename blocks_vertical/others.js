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

goog.provide('Blockly.Blocks.others');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['element_del'] = {
    init: function () {
        this.jsonInit({
            "id": "element_del",
            "message0": Blockly.Msg.ELEMENT_DEL_TOP,
            "message1": Blockly.Msg.ELEMENT_DEL_BOTTOM,
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
Blockly.Blocks['element_ins'] = {
    init: function () {
        this.jsonInit({
            "id": "element_ins",
            "message0": Blockly.Msg.ELEMENT_INS_TOP,
            "message1": Blockly.Msg.ELEMENT_INS_BOTTOM,
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
Blockly.Blocks['element_details'] = {
    init: function () {
        this.jsonInit({
            "id": "element_details",
            "message0": Blockly.Msg.ELEMENT_DETAILS_TOP,
            "message1": Blockly.Msg.ELEMENT_DETAILS_BOTTOM,
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
Blockly.Blocks['element_dialog'] = {
    init: function () {
        this.jsonInit({
            "id": "element_dialog",
            "message0": Blockly.Msg.ELEMENT_DIALOG_TOP,
            "message1": Blockly.Msg.ELEMENT_DIALOG_BOTTOM,
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
Blockly.Blocks['element_summary'] = {
    init: function () {
        this.jsonInit({
            "id": "element_summary",
            "message0": Blockly.Msg.ELEMENT_SUMMARY_TOP,
            "message1": Blockly.Msg.ELEMENT_SUMMARY_BOTTOM,
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
Blockly.Blocks['element_param'] = {
    init: function () {
        this.jsonInit({
            "id": "element_param",
            "message0": Blockly.Msg.ELEMENT_PARAM,
            "args0": [
                {
                    "type": "input_value",
                    "name": "ATTRIBUTE"
                }
            ],
            "category": Blockly.Categories.others,
            "extensions": ["colours_others", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_wbr'] = {
    init: function () {
        this.jsonInit({
            "id": "element_wbr",
            "message0": Blockly.Msg.ELEMENT_WBR,
            "args0": [
                {
                    "type": "input_value",
                    "name": "ATTRIBUTE"
                }
            ],
            "category": Blockly.Categories.others,
            "extensions": ["colours_others", "shape_statement"]
        });
    }
};

// text
Blockly.Blocks['element_webpageeditor-text'] = {
    /**
     * Text Node
     * @this Blockly.Block
     */
    init: function () {
        this.jsonInit({
            "id": "element_webpageeditor-text",
            "message0": Blockly.Msg["ELEMENT_WEBEDITOR-TEXT"],
            "args0": [
                {
                    "type": "input_value",
                    "name": "VALUE",
                    "check": "String"
                }
            ],
            "category": Blockly.Categories.others,
            "extensions": ["colours_others", "shape_statement"]
        });
    }
};