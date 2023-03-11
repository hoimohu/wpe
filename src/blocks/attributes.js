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

goog.provide('Blockly.Blocks.attributes');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


// attribute join
Blockly.Blocks['attributes_join'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTES_JOIN,
            "args0": [
                {
                    "type": "input_value",
                    "name": "ATTRIBUTE1"
                },
                {
                    "type": "input_value",
                    "name": "ATTRIBUTE2"
                }
            ],
            "category": Blockly.Categories.attributes,
            "extensions": ["colours_attributes", "output_string"]
        });
    }
};

// attributes

Blockly.Blocks['attribute_accept'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_ACCEPT,
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
Blockly.Blocks['attribute_accesskey'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_ACCESSKEY,
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
Blockly.Blocks['attribute_allow'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_ALLOW,
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
Blockly.Blocks['attribute_alt'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_ALT,
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
Blockly.Blocks['attribute_autocapitalize'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_AUTOCAPITALIZE,
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
Blockly.Blocks['attribute_autocomplete'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_AUTOCOMPLETE,
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
Blockly.Blocks['attribute_autofocus'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_AUTOFOCUS,
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
Blockly.Blocks['attribute_autoplay'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_AUTOPLAY,
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
Blockly.Blocks['attribute_capture'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_CAPTURE,
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
Blockly.Blocks['attribute_charset'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_CHARSET,
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
Blockly.Blocks['attribute_checked'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_CHECKED,
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
Blockly.Blocks['attribute_class'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_CLASS,
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
Blockly.Blocks['attribute_cols'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_COLS,
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
Blockly.Blocks['attribute_colspan'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_COLSPAN,
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
Blockly.Blocks['attribute_contenteditable'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_CONTENTEDITABLE,
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
Blockly.Blocks['attribute_controls'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_CONTROLS,
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
Blockly.Blocks['attribute_coords'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_COORDS,
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
Blockly.Blocks['attribute_data'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_DATA,
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
Blockly.Blocks['attribute_default'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_DEFAULT,
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
Blockly.Blocks['attribute_dir'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_DIR,
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
Blockly.Blocks['attribute_disabled'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_DISABLED,
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
Blockly.Blocks['attribute_download'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_DOWNLOAD,
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
Blockly.Blocks['attribute_for'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_FOR,
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
Blockly.Blocks['attribute_headers'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_HEADERS,
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
Blockly.Blocks['attribute_high'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_HIGH,
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
Blockly.Blocks['attribute_height'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_HEIGHT,
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
Blockly.Blocks['attribute_href'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_HREF,
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
Blockly.Blocks['attribute_id'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_ID,
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
Blockly.Blocks['attribute_kind'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_KIND,
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
Blockly.Blocks['attribute_label'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_LABEL,
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
Blockly.Blocks['attribute_lang'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_LANG,
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
Blockly.Blocks['attribute_list'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_LIST,
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
Blockly.Blocks['attribute_loop'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_LOOP,
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
Blockly.Blocks['attribute_low'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_LOW,
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
Blockly.Blocks['attribute_max'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_MAX,
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
Blockly.Blocks['attribute_maxlength'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_MAXLENGTH,
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
Blockly.Blocks['attribute_min'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_MIN,
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
Blockly.Blocks['attribute_minlength'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_MINLENGTH,
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
Blockly.Blocks['attribute_multiple'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_MULTIPLE,
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
Blockly.Blocks['attribute_muted'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_MUTED,
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
Blockly.Blocks['attribute_name'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_NAME,
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
Blockly.Blocks['attribute_open'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_OPEN,
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
Blockly.Blocks['attribute_optimum'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_OPTIMUM,
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
Blockly.Blocks['attribute_pattern'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_PATTERN,
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
Blockly.Blocks['attribute_placeholder'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_PLACEHOLDER,
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
Blockly.Blocks['attribute_poster'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_POSTER,
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
Blockly.Blocks['attribute_readonly'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_READONLY,
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
Blockly.Blocks['attribute_rel'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_REL,
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
Blockly.Blocks['attribute_required'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_REQUIRED,
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
Blockly.Blocks['attribute_rows'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_ROWS,
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
Blockly.Blocks['attribute_rowspan'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_ROWSPAN,
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
Blockly.Blocks['attribute_sandbox'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_SANDBOX,
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
Blockly.Blocks['attribute_scope'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_SCOPE,
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
Blockly.Blocks['attribute_shape'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_SHAPE,
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
Blockly.Blocks['attribute_size'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_SIZE,
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
Blockly.Blocks['attribute_span'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_SPAN,
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
Blockly.Blocks['attribute_src'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_SRC,
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
Blockly.Blocks['attribute_srclang'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_SRCLANG,
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
Blockly.Blocks['attribute_step'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_STEP,
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
Blockly.Blocks['attribute_style'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_STYLE,
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
Blockly.Blocks['attribute_target'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_TARGET,
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
Blockly.Blocks['attribute_title'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_TITLE,
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
Blockly.Blocks['attribute_type'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_TYPE,
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
Blockly.Blocks['attribute_usemap'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_USEMAP,
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
Blockly.Blocks['attribute_value'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_VALUE,
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
Blockly.Blocks['attribute_width'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ATTRIBUTE_WIDTH,
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
