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

goog.provide('Blockly.Blocks.modifier');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['element_a'] = {
    /**
     * A Element
     * @this Blockly.Block
     */
    init: function () {
        this.jsonInit({
            "id": "element_a",
            "message0": Blockly.Msg.ELEMENT_A_TOP,
            "message1": Blockly.Msg.ELEMENT_A_BOTTOM,
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
            "category": Blockly.Categories.modifier,
            "extensions": ["colours_modifier", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_b'] = {
    init: function () {
        this.jsonInit({
            "id": "element_b",
            "message0": Blockly.Msg.ELEMENT_B_TOP,
            "message1": Blockly.Msg.ELEMENT_B_BOTTOM,
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "SUBSTACK"
                }
            ],
            "category": Blockly.Categories.modifier,
            "extensions": ["colours_modifier", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_br'] = {
    /**
     * BR Element
     * @this Blockly.Block
     */
    init: function () {
        this.jsonInit({
            "id": "element_br",
            "message0": Blockly.Msg.ELEMENT_BR,
            "category": Blockly.Categories.modifier,
            "extensions": ["colours_modifier", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_code'] = {
    init: function () {
        this.jsonInit({
            "id": "element_code",
            "message0": Blockly.Msg.ELEMENT_CODE_TOP,
            "message1": Blockly.Msg.ELEMENT_CODE_BOTTOM,
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "SUBSTACK"
                }
            ],
            "category": Blockly.Categories.modifier,
            "extensions": ["colours_modifier", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_em'] = {
    init: function () {
        this.jsonInit({
            "id": "element_em",
            "message0": Blockly.Msg.ELEMENT_EM_TOP,
            "message1": Blockly.Msg.ELEMENT_EM_BOTTOM,
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "SUBSTACK"
                }
            ],
            "category": Blockly.Categories.modifier,
            "extensions": ["colours_modifier", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_i'] = {
    init: function () {
        this.jsonInit({
            "id": "element_i",
            "message0": Blockly.Msg.ELEMENT_I_TOP,
            "message1": Blockly.Msg.ELEMENT_I_BOTTOM,
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "SUBSTACK"
                }
            ],
            "category": Blockly.Categories.modifier,
            "extensions": ["colours_modifier", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_mark'] = {
    init: function () {
        this.jsonInit({
            "id": "element_mark",
            "message0": Blockly.Msg.ELEMENT_MARK_TOP,
            "message1": Blockly.Msg.ELEMENT_MARK_BOTTOM,
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "SUBSTACK"
                }
            ],
            "category": Blockly.Categories.modifier,
            "extensions": ["colours_modifier", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_q'] = {
    init: function () {
        this.jsonInit({
            "id": "element_q",
            "message0": Blockly.Msg.ELEMENT_Q_TOP,
            "message1": Blockly.Msg.ELEMENT_Q_BOTTOM,
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "SUBSTACK"
                }
            ],
            "category": Blockly.Categories.modifier,
            "extensions": ["colours_modifier", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_rp'] = {
    init: function () {
        this.jsonInit({
            "id": "element_rp",
            "message0": Blockly.Msg.ELEMENT_RP_TOP,
            "message1": Blockly.Msg.ELEMENT_RP_BOTTOM,
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "SUBSTACK"
                }
            ],
            "category": Blockly.Categories.modifier,
            "extensions": ["colours_modifier", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_rt'] = {
    init: function () {
        this.jsonInit({
            "id": "element_rt",
            "message0": Blockly.Msg.ELEMENT_RT_TOP,
            "message1": Blockly.Msg.ELEMENT_RT_BOTTOM,
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "SUBSTACK"
                }
            ],
            "category": Blockly.Categories.modifier,
            "extensions": ["colours_modifier", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_ruby'] = {
    init: function () {
        this.jsonInit({
            "id": "element_ruby",
            "message0": Blockly.Msg.ELEMENT_RUBY_TOP,
            "message1": Blockly.Msg.ELEMENT_RUBY_BOTTOM,
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "SUBSTACK"
                }
            ],
            "category": Blockly.Categories.modifier,
            "extensions": ["colours_modifier", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_s'] = {
    init: function () {
        this.jsonInit({
            "id": "element_s",
            "message0": Blockly.Msg.ELEMENT_S_TOP,
            "message1": Blockly.Msg.ELEMENT_S_BOTTOM,
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "SUBSTACK"
                }
            ],
            "category": Blockly.Categories.modifier,
            "extensions": ["colours_modifier", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_small'] = {
    init: function () {
        this.jsonInit({
            "id": "element_small",
            "message0": Blockly.Msg.ELEMENT_SMALL_TOP,
            "message1": Blockly.Msg.ELEMENT_SMALL_BOTTOM,
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "SUBSTACK"
                }
            ],
            "category": Blockly.Categories.modifier,
            "extensions": ["colours_modifier", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_span'] = {
    init: function () {
        this.jsonInit({
            "id": "element_span",
            "message0": Blockly.Msg.ELEMENT_SPAN_TOP,
            "message1": Blockly.Msg.ELEMENT_SPAN_BOTTOM,
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
            "category": Blockly.Categories.modifier,
            "extensions": ["colours_modifier", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_strong'] = {
    init: function () {
        this.jsonInit({
            "id": "element_strong",
            "message0": Blockly.Msg.ELEMENT_STRONG_TOP,
            "message1": Blockly.Msg.ELEMENT_STRONG_BOTTOM,
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "SUBSTACK"
                }
            ],
            "category": Blockly.Categories.modifier,
            "extensions": ["colours_modifier", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_sub'] = {
    init: function () {
        this.jsonInit({
            "id": "element_sub",
            "message0": Blockly.Msg.ELEMENT_SUB_TOP,
            "message1": Blockly.Msg.ELEMENT_SUB_BOTTOM,
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "SUBSTACK"
                }
            ],
            "category": Blockly.Categories.modifier,
            "extensions": ["colours_modifier", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_sup'] = {
    init: function () {
        this.jsonInit({
            "id": "element_sup",
            "message0": Blockly.Msg.ELEMENT_SUP_TOP,
            "message1": Blockly.Msg.ELEMENT_SUP_BOTTOM,
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "SUBSTACK"
                }
            ],
            "category": Blockly.Categories.modifier,
            "extensions": ["colours_modifier", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_u'] = {
    init: function () {
        this.jsonInit({
            "id": "element_u",
            "message0": Blockly.Msg.ELEMENT_U_TOP,
            "message1": Blockly.Msg.ELEMENT_U_BOTTOM,
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "SUBSTACK"
                }
            ],
            "category": Blockly.Categories.modifier,
            "extensions": ["colours_modifier", "shape_statement"]
        });
    }
};