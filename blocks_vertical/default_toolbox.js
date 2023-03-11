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
goog.provide('Blockly.Blocks.defaultToolbox');
goog.require('Blockly.Blocks');

/**
 * @fileoverview Provide a default toolbox XML.
 */
Blockly.Blocks.defaultToolbox =
    `<xml id="toolbox-categories">
        <category name="%{BKY_CATEGORY_MAIN}" id="main" colour="#FFFFFF" secondaryColour="#000000">
            <block type="element_html" id="element_html" />
            <block type="element_head" id="element_head" />
            <block type="element_meta" id="element_meta">
                <value name="ATTRIBUTE">
                    <block type="attribute_charset" id="attribute_charset">
                        <value name="VALUE">
                            <shadow type="text">
                                <field name="TEXT">utf-8</field>
                            </shadow>
                        </value>
                    </block>
                </value>
            </block>
            <block type="element_title" id="element_title">
                <value name="SUBSTACK">
                    <block type="element_webpageeditor-text" id="element_webpageeditor-text">
                        <value name="VALUE">
                            <shadow type="text">
                                <field name="TEXT">タイトル</field>
                            </shadow>
                        </value>
                    </block>
                </value>
            </block>
            <block type="element_body" id="element_body" />
            <block type="element_webpageeditor-text" id="element_webpageeditor-text">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="element_a">
                <value name="ATTRIBUTE">
                    <block type="attribute_href">
                        <value name="VALUE">
                            <shadow type="text">
                                <field name="TEXT">https://example.com/</field>
                            </shadow>
                        </value>
                    </block>
                </value>
                <statement name="SUBSTACK">
                    <block type="element_webpageeditor-text">
                        <value name="VALUE">
                            <shadow type="text">
                                <field name="TEXT">リンクだよ</field>
                            </shadow>
                        </value>
                    </block>
                </statement>
            </block>
            <block type="element_br" id="element_br" />
            <block type="element_hr" id="element_hr" />
            <block type="element_img" id="element_img">
                <value name="ATTRIBUTE">
                    <block type="attribute_src" id="attribute_src">
                        <value name="VALUE">
                            <shadow type="text">
                                <field name="TEXT">ファイル名</field>
                            </shadow>
                        </value>
                    </block>
                </value>
            </block>
            <block type="attributes_join" id="attributes_join" />
            <block type="attribute_style" id="attributes_style">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
        </category>
        <category name="%{BKY_CATEGORY_BASIC}" id="basic" colour="#FFAB19" secondaryColour="#EC9C13">
            <block type="element_webpageeditor-doctypehtml" id="element_webpageeditor-doctypehtml" />
            <block type="element_html" id="element_html" />
            <block type="element_head" id="element_head" />
            <block type="element_body" id="element_body" />
        </category>
        <category name="%{BKY_CATEGORY_META}" id="meta" colour="#4C97FF" secondaryColour="#4280D7">
            <block type="element_base" id="element_base">
                <value name="ATTRIBUTE">
                    <block type="attribute_target" id="attribute_target">
                        <value name="VALUE">
                            <shadow type="text">
                                <field name="TEXT">_blank</field>
                            </shadow>
                        </value>
                    </block>
                </value>
            </block>
            <block type="element_link" id="element_link" />
            <block type="element_meta" id="element_meta">
                <value name="ATTRIBUTE">
                    <block type="attribute_charset" id="attribute_charset">
                        <value name="VALUE">
                            <shadow type="text">
                                <field name="TEXT">utf-8</field>
                            </shadow>
                        </value>
                    </block>
                </value>
            </block>
            <block type="element_style" id="element_style" />
            <block type="element_title" id="element_title">
                <value name="SUBSTACK">
                    <block type="element_webpageeditor-text" id="element_webpageeditor-text">
                        <value name="VALUE">
                            <shadow type="text">
                                <field name="TEXT">タイトル</field>
                            </shadow>
                        </value>
                    </block>
                </value>
            </block>
        </category>
        <category name="%{BKY_CATEGORY_STRUCTURE}" id="structure" colour="#F78392" secondaryColour="#F4909D">
            <block type="element_blockquote" id="element_blockquote" />
            <block type="element_div" id="element_div" />
            <block type="element_h1" id="element_h1" />
            <block type="element_h2" id="element_h2" />
            <block type="element_h3" id="element_h3" />
            <block type="element_hr" id="element_hr" />
            <block type="element_li" id="element_li" />
            <block type="element_ol" id="element_ol" />
            <block type="element_p" id="element_p" />
            <block type="element_ul" id="element_ul" />
        </category>
        <category name="%{BKY_CATEGORY_MODIFIER}" id="modifier" colour="#5CB1D6" secondaryColour="#47A8D1">
            <block type="element_a" id="element_a" />
            <block type="element_b" id="element_b" />
            <block type="element_br" id="element_br" />
            <block type="element_code" id="element_code" />
            <block type="element_em" id="element_em" />
            <block type="element_i" id="element_i" />
            <block type="element_mark" id="element_mark" />
            <block type="element_q" id="element_q" />
            <block type="element_rp" id="element_rp" />
            <block type="element_rt" id="element_rt" />
            <block type="element_ruby" id="element_ruby" />
            <block type="element_s" id="element_s" />
            <block type="element_small" id="element_small" />
            <block type="element_span" id="element_span" />
            <block type="element_strong" id="element_strong" />
            <block type="element_sub" id="element_sub" />
            <block type="element_sup" id="element_sup" />
            <block type="element_u" id="element_u" />
        </category>
        <category name="%{BKY_CATEGORY_EMBED}" id="embed" colour="#CF63CF" secondaryColour="#C94FC9">
            <block type="element_area" id="element_area" />
            <block type="element_audio" id="element_audio" />
            <block type="element_embed" id="element_embed" />
            <block type="element_iframe" id="element_iframe" />
            <block type="element_img" id="element_img">
                <value name="ATTRIBUTE">
                    <block type="attribute_src" id="attribute_src">
                        <value name="VALUE">
                            <shadow type="text">
                                <field name="TEXT">ファイル名</field>
                            </shadow>
                        </value>
                    </block>
                </value>
            </block>
            <block type="element_map" id="element_map" />
            <block type="element_object" id="element_object" />
            <block type="element_track" id="element_track" />
            <block type="element_video" id="element_video" />
        </category>
        <category name="%{BKY_CATEGORY_TABLE}" id="table" colour="#FF8C1A" secondaryColour="#FF8000">
            <block type="element_caption" id="element_caption" />
            <block type="element_col" id="element_col" />
            <block type="element_colgroup" id="element_colgroup" />
            <block type="element_table" id="element_table" />
            <block type="element_tbody" id="element_tbody" />
            <block type="element_td" id="element_td" />
            <block type="element_tfoot" id="element_tfoot" />
            <block type="element_th" id="element_th" />
            <block type="element_thead" id="element_thead" />
            <block type="element_tr" id="element_tr" />
        </category>
        <category name="%{BKY_CATEGORY_FORM}" id="form" colour="#9966FF" secondaryColour="#855CD6">
            <block type="element_button" id="element_button" />
            <block type="element_datalist" id="element_datalist" />
            <block type="element_form" id="element_form" />
            <block type="element_input" id="element_input">
                <value name="ATTRIBUTE">
                    <block type="attribute_type" id="attribute_type">
                        <value name="VALUE">
                            <shadow type="text">
                                <field name="TEXT">text</field>
                            </shadow>
                        </value>
                    </block>
                </value>
            </block>
            <block type="element_label" id="element_label" />
            <block type="element_meter" id="element_meter" />
            <block type="element_optgroup" id="element_optgroup" />
            <block type="element_option" id="element_option" />
            <block type="element_output" id="element_output" />
            <block type="element_progress" id="element_progress" />
            <block type="element_select" id="element_select" />
            <block type="element_textarea" id="element_textarea" />
        </category>
        <category name="%{BKY_CATEGORY_OTHERS}" id="others" colour="#FF6680" secondaryColour="#FF4D6A">
            <block type="element_webpageeditor-text" id="element_webpageeditor-text">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="element_del" id="element_del" />
            <block type="element_ins" id="element_ins" />
            <block type="element_details" id="element_details" />
            <block type="element_dialog" id="element_dialog" />
            <block type="element_summary" id="element_summary" />
            <block type="element_param" id="element_param" />
            <block type="element_wbr" id="element_wbr" />
        </category>
        <category name="%{BKY_CATEGORY_ATTRIBUTES}" id="attributes" colour="#59C059" secondaryColour="#46B946">
            <block type="attributes_join" id="attributes_join" />
            <block type="attribute_accept" id="attribute_accept">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_accesskey" id="attribute_accesskey">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_allow" id="attribute_allow">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_alt" id="attribute_alt">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_autocapitalize" id="attribute_autocapitalize">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_autocomplete" id="attribute_autocomplete">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_autofocus" id="attribute_autofocus">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_autoplay" id="attribute_autoplay">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_capture" id="attribute_capture">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_charset" id="attribute_charset">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_checked" id="attribute_checked">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_class" id="attribute_class">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_cols" id="attribute_cols">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_colspan" id="attribute_colspan">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_contenteditable" id="attribute_contenteditable">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_controls" id="attribute_controls">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_coords" id="attribute_coords">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_data" id="attribute_data">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_default" id="attribute_default">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_dir" id="attribute_dir">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_disabled" id="attribute_disabled">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_download" id="attribute_download">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_for" id="attribute_for">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_headers" id="attribute_headers">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_high" id="attribute_high">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_height" id="attribute_height">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_href" id="attribute_href">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_id" id="attribute_id">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_kind" id="attribute_kind">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_label" id="attribute_label">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_lang" id="attribute_lang">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_list" id="attribute_list">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_loop" id="attribute_loop">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_low" id="attribute_low">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_max" id="attribute_max">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_maxlength" id="attribute_maxlength">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_min" id="attribute_min">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_minlength" id="attribute_minlength">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_multiple" id="attribute_multiple">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_muted" id="attribute_muted">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_name" id="attribute_name">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_open" id="attribute_open">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_optimum" id="attribute_optimum">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_pattern" id="attribute_pattern">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_placeholder" id="attribute_placeholder">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_poster" id="attribute_poster">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_readonly" id="attribute_readonly">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_rel" id="attribute_rel">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_required" id="attribute_required">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_rows" id="attribute_rows">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_rowspan" id="attribute_rowspan">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_sandbox" id="attribute_sandbox">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_scope" id="attribute_scope">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_shape" id="attribute_shape">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_size" id="attribute_size">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_span" id="attribute_span">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_src" id="attribute_src">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_srclang" id="attribute_srclang">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_step" id="attribute_step">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_style" id="attribute_style">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_target" id="attribute_target">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_title" id="attribute_title">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_type" id="attribute_type">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_usemap" id="attribute_usemap">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_value" id="attribute_value">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="attribute_width" id="attribute_width">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
        </category>
    </xml>`;
