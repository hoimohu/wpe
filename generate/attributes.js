function attributeMsg(text) {
    let output = '';
    const spl = text.split("Blockly.Blocks['attribute_");
    spl.shift();
    const newarray = spl.map(e => e.match(/^[^']+/)[0]);
    newarray.forEach(e => {
        output += `
"ATTRIBUTE_${e.toUpperCase()}": "${e}=\\" %1 \\"",`;
    });
    console.log(output);
    return output;
}
function attributeToolbar(text) {
    let output = '';
    const spl = text.split("Blockly.Blocks['attribute_");
    spl.shift();
    const newarray = spl.map(e => e.match(/^[^']+/)[0]);
    newarray.forEach(e => {
        output += `
<block type="attribute_${e}" id="attribute_${e}">
    <value name="VALUE">
        <shadow type="text">
            <field name="TEXT"></field>
        </shadow>
    </value>
</block>`;
    });
    console.log(output);
    return output;
}