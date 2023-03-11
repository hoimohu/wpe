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

goog.provide('Blockly.Blocks.table');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['element_caption'] = {
    init: function () {
        this.jsonInit({
            "id": "element_caption",
            "message0": Blockly.Msg.ELEMENT_CAPTION_TOP,
            "message1": Blockly.Msg.ELEMENT_CAPTION_BOTTOM,
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
            "category": Blockly.Categories.table,
            "extensions": ["colours_table", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_col'] = {
    init: function () {
        this.jsonInit({
            "id": "element_col",
            "message0": Blockly.Msg.ELEMENT_COL,
            "args0": [
                {
                    "type": "input_value",
                    "name": "ATTRIBUTE"
                }
            ],
            "category": Blockly.Categories.table,
            "extensions": ["colours_table", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_colgroup'] = {
    init: function () {
        this.jsonInit({
            "id": "element_colgroup",
            "message0": Blockly.Msg.ELEMENT_COLGROUP_TOP,
            "message1": Blockly.Msg.ELEMENT_COLGROUP_BOTTOM,
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
            "category": Blockly.Categories.table,
            "extensions": ["colours_table", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_table'] = {
    init: function () {
        this.jsonInit({
            "id": "element_table",
            "message0": Blockly.Msg.ELEMENT_TABLE_TOP,
            "message1": Blockly.Msg.ELEMENT_TABLE_BOTTOM,
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
            "category": Blockly.Categories.table,
            "extensions": ["colours_table", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_tbody'] = {
    init: function () {
        this.jsonInit({
            "id": "element_tbody",
            "message0": Blockly.Msg.ELEMENT_TBODY_TOP,
            "message1": Blockly.Msg.ELEMENT_TBODY_BOTTOM,
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
            "category": Blockly.Categories.table,
            "extensions": ["colours_table", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_td'] = {
    init: function () {
        this.jsonInit({
            "id": "element_td",
            "message0": Blockly.Msg.ELEMENT_TD_TOP,
            "message1": Blockly.Msg.ELEMENT_TD_BOTTOM,
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
            "category": Blockly.Categories.table,
            "extensions": ["colours_table", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_tfoot'] = {
    init: function () {
        this.jsonInit({
            "id": "element_tfoot",
            "message0": Blockly.Msg.ELEMENT_TFOOT_TOP,
            "message1": Blockly.Msg.ELEMENT_TFOOT_BOTTOM,
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
            "category": Blockly.Categories.table,
            "extensions": ["colours_table", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_th'] = {
    init: function () {
        this.jsonInit({
            "id": "element_th",
            "message0": Blockly.Msg.ELEMENT_TH_TOP,
            "message1": Blockly.Msg.ELEMENT_TH_BOTTOM,
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
            "category": Blockly.Categories.table,
            "extensions": ["colours_table", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_thead'] = {
    init: function () {
        this.jsonInit({
            "id": "element_thead",
            "message0": Blockly.Msg.ELEMENT_THEAD_TOP,
            "message1": Blockly.Msg.ELEMENT_THEAD_BOTTOM,
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
            "category": Blockly.Categories.table,
            "extensions": ["colours_table", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_tr'] = {
    init: function () {
        this.jsonInit({
            "id": "element_tr",
            "message0": Blockly.Msg.ELEMENT_TR_TOP,
            "message1": Blockly.Msg.ELEMENT_TR_BOTTOM,
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
            "category": Blockly.Categories.table,
            "extensions": ["colours_table", "shape_statement"]
        });
    }
};