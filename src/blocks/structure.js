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

goog.provide('Blockly.Blocks.structure');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['element_h1'] = {
    init: function () {
        this.jsonInit({
            "id": "element_h1",
            "message0": Blockly.Msg.ELEMENT_H1_TOP,
            "message1": Blockly.Msg.ELEMENT_H1_BOTTOM,
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
            "category": Blockly.Categories.structure,
            "extensions": ["colours_structure", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_h2'] = {
    init: function () {
        this.jsonInit({
            "id": "element_h2",
            "message0": Blockly.Msg.ELEMENT_H2_TOP,
            "message1": Blockly.Msg.ELEMENT_H2_BOTTOM,
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
            "category": Blockly.Categories.structure,
            "extensions": ["colours_structure", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_h3'] = {
    init: function () {
        this.jsonInit({
            "id": "element_h3",
            "message0": Blockly.Msg.ELEMENT_H3_TOP,
            "message1": Blockly.Msg.ELEMENT_H3_BOTTOM,
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
            "category": Blockly.Categories.structure,
            "extensions": ["colours_structure", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_blockquote'] = {
    init: function () {
        this.jsonInit({
            "id": "element_blockquote",
            "message0": Blockly.Msg.ELEMENT_BLOCKQUOTE_TOP,
            "message1": Blockly.Msg.ELEMENT_BLOCKQUOTE_BOTTOM,
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
            "category": Blockly.Categories.structure,
            "extensions": ["colours_structure", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_div'] = {
    init: function () {
        this.jsonInit({
            "id": "element_div",
            "message0": Blockly.Msg.ELEMENT_DIV_TOP,
            "message1": Blockly.Msg.ELEMENT_DIV_BOTTOM,
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
            "category": Blockly.Categories.structure,
            "extensions": ["colours_structure", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_hr'] = {
    /**
     * HR Element
     * @this Blockly.Block
     */
    init: function () {
        this.jsonInit({
            "id": "element_hr",
            "message0": Blockly.Msg.ELEMENT_HR,
            "args0": [
                {
                    "type": "input_value",
                    "name": "ATTRIBUTE"
                }
            ],
            "category": Blockly.Categories.structure,
            "extensions": ["colours_structure", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_li'] = {
    init: function () {
        this.jsonInit({
            "id": "element_li",
            "message0": Blockly.Msg.ELEMENT_LI_TOP,
            "message1": Blockly.Msg.ELEMENT_LI_BOTTOM,
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
            "category": Blockly.Categories.structure,
            "extensions": ["colours_structure", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_ol'] = {
    init: function () {
        this.jsonInit({
            "id": "element_ol",
            "message0": Blockly.Msg.ELEMENT_OL_TOP,
            "message1": Blockly.Msg.ELEMENT_OL_BOTTOM,
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
            "category": Blockly.Categories.structure,
            "extensions": ["colours_structure", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_p'] = {
    init: function () {
        this.jsonInit({
            "id": "element_p",
            "message0": Blockly.Msg.ELEMENT_P_TOP,
            "message1": Blockly.Msg.ELEMENT_P_BOTTOM,
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
            "category": Blockly.Categories.structure,
            "extensions": ["colours_structure", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_ul'] = {
    init: function () {
        this.jsonInit({
            "id": "element_ul",
            "message0": Blockly.Msg.ELEMENT_UL_TOP,
            "message1": Blockly.Msg.ELEMENT_UL_BOTTOM,
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
            "category": Blockly.Categories.structure,
            "extensions": ["colours_structure", "shape_statement"]
        });
    }
};