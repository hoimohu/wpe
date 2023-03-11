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

goog.provide('Blockly.Blocks.form');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['element_button'] = {
    init: function () {
        this.jsonInit({
            "id": "element_button",
            "message0": Blockly.Msg.ELEMENT_BUTTON_TOP,
            "message1": Blockly.Msg.ELEMENT_BUTTON_BOTTOM,
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
            "category": Blockly.Categories.form,
            "extensions": ["colours_form", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_datalist'] = {
    init: function () {
        this.jsonInit({
            "id": "element_datalist",
            "message0": Blockly.Msg.ELEMENT_DATALIST_TOP,
            "message1": Blockly.Msg.ELEMENT_DATALIST_BOTTOM,
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
            "category": Blockly.Categories.form,
            "extensions": ["colours_form", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_form'] = {
    init: function () {
        this.jsonInit({
            "id": "element_form",
            "message0": Blockly.Msg.ELEMENT_FORM_TOP,
            "message1": Blockly.Msg.ELEMENT_FORM_BOTTOM,
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
            "category": Blockly.Categories.form,
            "extensions": ["colours_form", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_input'] = {
    init: function () {
        this.jsonInit({
            "id": "element_input",
            "message0": Blockly.Msg.ELEMENT_INPUT,
            "args0": [
                {
                    "type": "input_value",
                    "name": "ATTRIBUTE"
                }
            ],
            "category": Blockly.Categories.form,
            "extensions": ["colours_form", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_label'] = {
    init: function () {
        this.jsonInit({
            "id": "element_label",
            "message0": Blockly.Msg.ELEMENT_LABEL_TOP,
            "message1": Blockly.Msg.ELEMENT_LABEL_BOTTOM,
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
            "category": Blockly.Categories.form,
            "extensions": ["colours_form", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_meter'] = {
    init: function () {
        this.jsonInit({
            "id": "element_meter",
            "message0": Blockly.Msg.ELEMENT_METER_TOP,
            "message1": Blockly.Msg.ELEMENT_METER_BOTTOM,
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
            "category": Blockly.Categories.form,
            "extensions": ["colours_form", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_optgroup'] = {
    init: function () {
        this.jsonInit({
            "id": "element_optgroup",
            "message0": Blockly.Msg.ELEMENT_OPTGROUP_TOP,
            "message1": Blockly.Msg.ELEMENT_OPTGROUP_BOTTOM,
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
            "category": Blockly.Categories.form,
            "extensions": ["colours_form", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_option'] = {
    init: function () {
        this.jsonInit({
            "id": "element_option",
            "message0": Blockly.Msg.ELEMENT_OPTION_TOP,
            "message1": Blockly.Msg.ELEMENT_OPTION_BOTTOM,
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
            "category": Blockly.Categories.form,
            "extensions": ["colours_form", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_output'] = {
    init: function () {
        this.jsonInit({
            "id": "element_output",
            "message0": Blockly.Msg.ELEMENT_OUTPUT_TOP,
            "message1": Blockly.Msg.ELEMENT_OUTPUT_BOTTOM,
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
            "category": Blockly.Categories.form,
            "extensions": ["colours_form", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_progress'] = {
    init: function () {
        this.jsonInit({
            "id": "element_progress",
            "message0": Blockly.Msg.ELEMENT_PROGRESS_TOP,
            "message1": Blockly.Msg.ELEMENT_PROGRESS_BOTTOM,
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
            "category": Blockly.Categories.form,
            "extensions": ["colours_form", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_select'] = {
    init: function () {
        this.jsonInit({
            "id": "element_select",
            "message0": Blockly.Msg.ELEMENT_SELECT_TOP,
            "message1": Blockly.Msg.ELEMENT_SELECT_BOTTOM,
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
            "category": Blockly.Categories.form,
            "extensions": ["colours_form", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_textarea'] = {
    init: function () {
        this.jsonInit({
            "id": "element_textarea",
            "message0": Blockly.Msg.ELEMENT_TEXTAREA_TOP,
            "message1": Blockly.Msg.ELEMENT_TEXTAREA_BOTTOM,
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
            "category": Blockly.Categories.form,
            "extensions": ["colours_form", "shape_statement"]
        });
    }
};