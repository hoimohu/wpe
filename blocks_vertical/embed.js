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

goog.provide('Blockly.Blocks.embed');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['element_area'] = {
    init: function () {
        this.jsonInit({
            "id": "element_area",
            "message0": Blockly.Msg.ELEMENT_AREA,
            "args0": [
                {
                    "type": "input_value",
                    "name": "ATTRIBUTE"
                }
            ],
            "category": Blockly.Categories.embed,
            "extensions": ["colours_embed", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_audio'] = {
    init: function () {
        this.jsonInit({
            "id": "element_audio",
            "message0": Blockly.Msg.ELEMENT_AUDIO_TOP,
            "message1": Blockly.Msg.ELEMENT_AUDIO_BOTTOM,
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
            "category": Blockly.Categories.embed,
            "extensions": ["colours_embed", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_img'] = {
    /**
     * IMG Element
     * @this Blockly.Block
     */
    init: function () {
        this.jsonInit({
            "id": "element_img",
            "message0": Blockly.Msg.ELEMENT_IMG,
            "args0": [
                {
                    "type": "input_value",
                    "name": "ATTRIBUTE"
                }
            ],
            "category": Blockly.Categories.embed,
            "extensions": ["colours_embed", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_map'] = {
    init: function () {
        this.jsonInit({
            "id": "element_map",
            "message0": Blockly.Msg.ELEMENT_MAP_TOP,
            "message1": Blockly.Msg.ELEMENT_MAP_BOTTOM,
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
            "category": Blockly.Categories.embed,
            "extensions": ["colours_embed", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_track'] = {
    init: function () {
        this.jsonInit({
            "id": "element_track",
            "message0": Blockly.Msg.ELEMENT_TRACK,
            "args0": [
                {
                    "type": "input_value",
                    "name": "ATTRIBUTE"
                }
            ],
            "category": Blockly.Categories.embed,
            "extensions": ["colours_embed", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_video'] = {
    init: function () {
        this.jsonInit({
            "id": "element_video",
            "message0": Blockly.Msg.ELEMENT_VIDEO_TOP,
            "message1": Blockly.Msg.ELEMENT_VIDEO_BOTTOM,
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
            "category": Blockly.Categories.embed,
            "extensions": ["colours_embed", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_embed'] = {
    init: function () {
        this.jsonInit({
            "id": "element_embed",
            "message0": Blockly.Msg.ELEMENT_EMBED,
            "args0": [
                {
                    "type": "input_value",
                    "name": "ATTRIBUTE"
                }
            ],
            "category": Blockly.Categories.embed,
            "extensions": ["colours_embed", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_iframe'] = {
    init: function () {
        this.jsonInit({
            "id": "element_iframe",
            "message0": Blockly.Msg.ELEMENT_IFRAME_TOP,
            "message1": Blockly.Msg.ELEMENT_IFRAME_BOTTOM,
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
            "category": Blockly.Categories.embed,
            "extensions": ["colours_embed", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_object'] = {
    init: function () {
        this.jsonInit({
            "id": "element_object",
            "message0": Blockly.Msg.ELEMENT_OBJECT_TOP,
            "message1": Blockly.Msg.ELEMENT_OBJECT_BOTTOM,
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
            "category": Blockly.Categories.embed,
            "extensions": ["colours_embed", "shape_statement"]
        });
    }
};
Blockly.Blocks['element_source'] = {
    init: function () {
        this.jsonInit({
            "id": "element_source",
            "message0": Blockly.Msg.ELEMENT_SOURCE,
            "args0": [
                {
                    "type": "input_value",
                    "name": "ATTRIBUTE"
                }
            ],
            "category": Blockly.Categories.embed,
            "extensions": ["colours_embed", "shape_statement"]
        });
    }
};