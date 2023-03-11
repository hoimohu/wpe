/**
 * 
 * @param {String} name 
 * @returns 
 */
function createMsg(isElement, name, hasChild, hasAttribute) {
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
"ELEMENT_${name.toUpperCase()}_TOP": "<${name} %1 %2 > %3 %4",
"ELEMENT_${name.toUpperCase()}_BOTTOM": "</${name}>",`;
        } else {
            output = `
"ELEMENT_${name.toUpperCase()}": "<${name} %1>",`;
        }
    } else {
        output = `
"ATTRIBUTE_${name.toUpperCase()}": "${name}=\" %1 \"",`;
    }
    console.log(output);
    return output;
}