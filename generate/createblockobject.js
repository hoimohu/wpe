function createBlockObject(isElement, name, hasChild, hasAttribute) {
    let output;
    let typeName = '';
    if (isElement) {
        typeName = 'element_' + name;
    } else {
        typeName = 'attribute_' + name;
    }
    if (isElement) {
        if (hasChild) {
            output = `
Blockly.Blocks['${typeName}'] = {
    init: function () {
        this.jsonInit({
            "id": "${typeName}",
            "message0": Blockly.Msg.${typeName.toUpperCase()}_TOP,
            "message1": Blockly.Msg.${typeName.toUpperCase()}_BOTTOM,
            "args0": [${hasAttribute ? `
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_value",
                    "name": "ATTRIBUTE"
                },
                {
                    "type": "input_dummy"
                },`: `
                {
                    "type": "input_dummy"
                },`}
                {
                    "type": "input_statement",
                    "name": "SUBSTACK"
                }
            ],
            "category": Blockly.Categories.basic,
            "extensions": ["colours_basic", "shape_statement"]
        });
    }
};`;
        } else {
            output = `
Blockly.Blocks['${typeName}'] = {
    init: function () {
        this.jsonInit({
            "id": "${typeName}",
            "message0": Blockly.Msg.${typeName.toUpperCase()},${hasAttribute ? `
            "args0": [
                {
                    "type": "input_value",
                    "name": "ATTRIBUTE"
                }
            ],`: ''}
            "category": Blockly.Categories.basic,
            "extensions": ["colours_basic", "shape_statement"]
        });
    }
};`;
        }
    } else {
        output = `
Blockly.Blocks['${typeName}'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.${typeName.toUpperCase()},${hasAttribute ? `
            "args0": [
                {
                    "type": "input_value",
                    "name": "ATTRIBUTE",
                    "check": "string"
                }
            ],`: ''}
            "category": Blockly.Categories.basic,
            "extensions": ["colours_basic", "output_string"]
        });
    }
};`
    }
    console.log(output);
    return output;
}