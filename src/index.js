'use strict';
import * as monaco from 'monaco-editor';
import { emmetHTML, emmetCSS } from 'emmet-monaco-es';

let workspace = null;
let htmlValue = '';
const directory = [];
let fileHandle;
let allowsave = true;

const previewChannel = new BroadcastChannel('prev');
previewChannel.addEventListener('message', () => {
    previewChannel.postMessage(directory);
    updatePreview();
});
const defaultHtml = `<html><head><meta charset="utf-8"><title>タイトル</title></head><body>文字</body></html>`;

function start() {
    const blocklyDiv = document.getElementById('blocklyDiv');
    const monacoEditor = document.getElementById('monacoEditor');
    const resizeBar1 = document.getElementById('resizeBar1');
    const resizeBar2 = document.getElementById('resizeBar2');
    const resizeWrapper1 = document.getElementById('resizeWrapper1');
    const resizeWrapper2 = document.getElementById('resizeWrapper2');
    const filename = document.getElementById('filename');
    const download = document.getElementById('download');
    const load = document.getElementById('load');
    const previewBtn = document.getElementById('previewBtn');
    const previewBtnImg = document.getElementById('previewBtnImg');
    const previewBtnMsg = document.getElementById('previewBtnMsg');
    const previewPopup = document.getElementById('previewPopup');
    const previewPopupMsg = document.getElementById('previewPopupMsg');
    const dragArea = document.getElementById('dragArea');
    const selectLang = document.getElementById('selectLang');
    resizeWrapper1.style.width = '60%';
    resizeWrapper2.style.width = '40%';
    resizeBar1.style.left = resizeWrapper1.style.width;
    let dragging1 = false;
    let dragging2 = false;
    resizeBar1.addEventListener('pointerdown', () => {
        dragging1 = true;
        dragArea.classList.add('dragging');
    });
    resizeBar2.addEventListener('pointerdown', () => {
        dragging2 = true;
        dragArea.classList.add('dragging');
    });
    document.addEventListener('pointermove', e => {
        if (dragging1) {
            resizeWrapper1.style.width = Math.min(e.clientX / innerWidth * 100, 99.9) + '%';
            resizeWrapper2.style.width = Math.max((innerWidth - e.clientX) / innerWidth * 100, 0) + '%';
            resizeBar1.style.left = resizeWrapper1.style.width;
            resizeBar2.style.width = resizeWrapper1.style.width;
            window.dispatchEvent(new Event('resize'));
        }
        if (dragging2) {
            blocklyDiv.style.height = Math.min(e.clientY / innerHeight * 100, 99.9) + '%';
            monacoEditor.style.height = Math.max((innerHeight - e.clientY) / innerHeight * 100, 0) + '%';
            resizeBar2.style.top = (resizeWrapper1.offsetHeight * Math.max(Math.min(e.clientY / innerHeight, 0.999), 0) + 30) + 'px';
            window.dispatchEvent(new Event('resize'));
        }
    });
    document.addEventListener('pointerup', () => {
        dragging1 = false;
        dragging2 = false;
        dragArea.classList.remove('dragging');
    });

    let locale = 'ja';
    for (const e of navigator.languages) {
        if (Object.hasOwn(WebeditorMsgs, e)) {
            locale = e;
            selectLang.value = e;
            break;
        }
    }

    const saveBtn = document.createElement('button');
    saveBtn.type = 'button';
    saveBtn.innerText = getMsg('OVERWRITE');
    saveBtn.addEventListener('click', async () => {
        saveBtn.innerText = getMsg('SAVING');
        await saveHandle();
    });

    let soundsEnabled = null;
    if (sessionStorage) {
        // Restore sounds state.
        soundsEnabled = sessionStorage.getItem('soundsEnabled');
        if (soundsEnabled === null) {
            soundsEnabled = true;
        } else {
            soundsEnabled = (soundsEnabled === 'true');
        }
    } else {
        soundsEnabled = true;
    }

    // Setup blocks

    let side = 'start';
    Blockly.ScratchMsgs.setLocale(locale);

    // Create main workspace.
    workspace = Blockly.inject('blocklyDiv', {
        comments: true,
        disable: false,
        collapse: false,
        media: 'blocks/media/',
        readOnly: false,
        scrollbars: true,
        toolboxPosition: side == 'top' || side == 'start' ? 'start' : 'end',
        horizontalLayout: side == 'top' || side == 'bottom',
        sounds: false,
        zoom: {
            controls: true,
            wheel: true,
            startScale: 0.675,
            maxScale: 4,
            minScale: 0.25,
            scaleSpeed: 1.1
        },
        colours: {
            fieldShadow: 'rgba(255, 255, 255, 0.3)',
            dragShadowOpacity: 0.6
        }
    });

    // monaco editor
    emmetHTML(monaco);
    emmetCSS(monaco);
    const editor = monaco.editor.create(monacoEditor, {
        automaticLayout: true,
        language: 'html'
    });
    monaco.editor.defineTheme("webpageeditor", {
        base: "vs",
        inherit: true,
        rules: [{ background: "F0F8FF" }],
        colors: {
            "editor.background": "#F0F8FF"
        },
    });
    monaco.editor.setTheme("webpageeditor");
    const model = editor.getModel();

    let editorFlush = false;
    editor.onDidChangeModelContent(function (e) {
        if (!editorFlush) {
            const change = e.changes[0];
            if (change.text === '>') {
                const range = {
                    startColumn: 1,
                    startLineNumber: change.range.startLineNumber,
                    endColumn: change.range.endColumn,
                    endLineNumber: change.range.endLineNumber
                };
                const rangeValue = model.getValueInRange(range);
                let tagName;
                if (!rangeValue.match(/>$/)) {
                    if (rangeValue.match(/<[^/<>\s]+$/)) {
                        tagName = rangeValue.match(/(?<=<)[^/<>\s]+$/)[0];
                    } else if (rangeValue.match(/<[^/]+/)) {
                        const rangeSplit = rangeValue.split(/\s+/g).reverse();
                        for (let i = 0; i < rangeSplit.length; i++) {
                            const element = rangeSplit[i];
                            if (element.match(/</)) {
                                tagName = element.match(/(?<=<)[^<]+$/)[0];
                                break;
                            }
                        }
                    }
                }
                if (tagName && !tagName.match(/(^!|^\/|area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)/)) {
                    const position = editor.getSelection();
                    const setRange = new monaco.Range(change.range.startLineNumber, change.range.endColumn + 1, change.range.endLineNumber, change.range.endColumn + 1);
                    model.pushEditOperations([position], [{
                        range: setRange,
                        text: '</' + tagName + '>'
                    }], () => editor.setSelection(setRange));
                }
            }
            fromHtml(editor.getValue());
            updatePreview(editor.getValue());
        } else {
            editorFlush = false;
        }
    });
    function onChange(e) {
        if (e instanceof Blockly.Events.EndBlockDrag ||
            e instanceof Blockly.Events.Change ||
            e instanceof Blockly.Events.CommentChange ||
            e instanceof Blockly.Events.CommentDelete ||
            (e instanceof Blockly.Events.CommentCreate && !e.text)
        ) {
            editorFlush = true;
            const value = editor.getValue().split('\n');
            const position = editor.getSelection();
            const setRange = new monaco.Range(1, 1, value.length, value[value.length - 1].length + 1);
            model.pushEditOperations([position], [{ range: setRange, text: toHtml() }], () => editor.setSelection(position));
            updatePreview(editor.getValue());
        }
    }
    workspace.addChangeListener(onChange);
    previewBtn.addEventListener('click', () => {
        let existIframe = document.getElementById('preview');
        if (!existIframe) {
            const iframe = createPreviewIframe();
            resizeWrapper2.appendChild(iframe);
            resizeWrapper1.appendChild(monacoEditor);
            blocklyDiv.style.height = '60%';
            monacoEditor.style.height = '40%';
            resizeBar2.style.top = (resizeWrapper1.offsetHeight * 0.6 + 30) + 'px';
            resizeBar2.style.width = resizeWrapper1.style.width;
            previewBtnImg.src = 'src/img/stop.svg';
            previewBtnImg.alt = getMsg('STOPVIEWING');
            previewBtnImg.title = getMsg('STOPVIEWING');
            previewBtnMsg.innerText = getMsg('STOPVIEWING');
            window.dispatchEvent(new Event('resize'));
        } else {
            existIframe.remove();
            resizeWrapper2.appendChild(monacoEditor);
            blocklyDiv.style.removeProperty('height');
            monacoEditor.style.removeProperty('height');
            resizeBar2.style.top = '1000%';
            previewBtnImg.src = 'src/img/play.svg';
            previewBtnImg.alt = getMsg('VIEW');
            previewBtnImg.title = getMsg('VIEW');
            previewBtnMsg.innerText = getMsg('VIEW');
            window.dispatchEvent(new Event('resize'));
        }
    });
    previewPopup.addEventListener('click', () => {
        createPreviewWindow();
    });
    download.addEventListener('click', () => {
        const blob = new Blob([htmlValue], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename.value !== '' ? (filename.value.match(/\.html?$/) ? filename.value : filename.value + '.html') : 'HTMLファイル.html';
        a.click();
    });
    load.addEventListener('click', async () => {
        const dirHandle = await window.showDirectoryPicker();
        const htmlfiles = [];
        const directoryValues = await dirHandle.values();
        for await (const entry of directoryValues) {
            directory.push(entry);
            if (entry.kind === 'file' && entry.name.match(/\.html?$/)) {
                htmlfiles.push(entry);
            }
        }
        if (htmlfiles.length === 1) {
            const file = await htmlfiles[0].getFile();
            const text = await file.text();
            filename.value = file.name;
            editor.setValue(text);
            fileHandle = htmlfiles[0];
            saveBtn.innerText = getMsg('OVERWRITE');
        } else if (htmlfiles.length > 1) {
            const dialog = document.createElement('div');
            dialog.classList.add('dialog');
            const h1 = document.createElement('h1');
            h1.innerText = getMsg('SELECTHTMLFILE');
            dialog.appendChild(h1);
            let perm = true;
            for await (const entry of htmlfiles) {
                const div = document.createElement('div');
                div.innerText = entry.name;
                div.addEventListener('click', async () => {
                    if (perm) {
                        perm = false;
                        dialog.remove();
                        const file = await entry.getFile();
                        const text = await file.text();
                        filename.value = file.name;
                        editor.setValue(text);
                        fileHandle = entry;
                    }
                });
                dialog.appendChild(div);
            }
            document.body.appendChild(dialog);
            saveBtn.innerText = getMsg('OVERWRITE');
        } else {
            saveBtn.innerText = getMsg('SAVEAS');
        }
        load.before(saveBtn);
        previewChannel.postMessage(directory);
    });

    async function saveHandle() {
        if (allowsave) {
            try {
                allowsave = false;
                if (fileHandle) {
                    const writable = await fileHandle.createWritable();
                    await writable.write(htmlValue);
                    await writable.close();
                } else {
                    const saveFileOptions = {
                        suggestedName: (filename.value !== '' ? (filename.value.match(/\.html?$/) ? filename.value : filename.value + '.html') : getMsg('HTMLFILE') + '.html'),
                        types: [
                            {
                                description: getMsg('SAVEDESCPTION'),
                                accept: {
                                    "text/html": [".html", ".htm"]
                                },
                            },
                        ],
                    };
                    saveBtn.innerText = getMsg('SAVING');
                    fileHandle = await window.showSaveFilePicker(saveFileOptions);
                    await saveHandle();
                    saveBtn.innerText = getMsg('SAVED');
                    await timeout(1000);
                }
            } finally {
                allowsave = true;
                if (fileHandle) {
                    saveBtn.innerText = getMsg('OVERWRITE');
                } else {
                    saveBtn.innerText = getMsg('SAVEAS');
                }
            }
        }
    }

    function getMsg(msg) {
        return WebeditorMsgs[locale][msg];
    }
    function setLocale(loc) {
        locale = loc;
        workspace.getFlyout().setRecyclingEnabled(false);
        var xml = Blockly.Xml.workspaceToDom(workspace);
        Blockly.ScratchMsgs.setLocale(loc);
        Blockly.Xml.clearWorkspaceAndLoadFromXml(xml, workspace);
        workspace.getFlyout().setRecyclingEnabled(true);
        workspace.updateToolbox(Blockly.Blocks.defaultToolbox);
        setWebeditorLocale();
    }
    function setWebeditorLocale() {
        document.title = getMsg('TITLE');
        filename.setAttribute('title', getMsg('FILENAME'));
        if (filename.value === '') {
            filename.value = getMsg('HTMLFILE');
        }
        filename.setAttribute('placeholder', getMsg('ENTERFILENAME'));
        download.innerText = getMsg('SAVE');
        load.innerText = getMsg('LOAD');
        let existIframe = document.getElementById('preview');
        if (!existIframe) {
            previewBtnImg.setAttribute('alt', getMsg('VIEW'));
            previewBtnImg.setAttribute('title', getMsg('VIEW'));
            previewBtnMsg.innerText = getMsg('VIEW');
        } else {
            previewBtnImg.setAttribute('alt', getMsg('STOPVIEWING'));
            previewBtnImg.setAttribute('title', getMsg('STOPVIEWING'));
            previewBtnMsg.innerText = getMsg('STOPVIEWING');
        }
        previewPopupMsg.innerText = getMsg('VIEWINNEWTAB');
        if (fileHandle) {
            saveBtn.innerText = getMsg('OVERWRITE');
        } else {
            saveBtn.innerText = getMsg('SAVEAS');
        }
    }
    selectLang.addEventListener('change', () => {
        setLocale(selectLang.value);
    });

    setWebeditorLocale();
    fromHtml(defaultHtml);
    editor.setValue(toHtml());
}

function toHtml() {
    const html = Blockly.Html.workspaceToDom(workspace);
    return Blockly.Html.domToPrettyText(html);
}

function fromHtml(inputHtml) {
    let xy;
    if (workspace.getTopBlocks().length > 0) {
        xy = workspace.getTopBlocks()[0].getRelativeToSurfaceXY();
    }
    const xml = Blockly.Html.htmlToXml(inputHtml);
    if (xml) {
        if (xy) {
            const children = xml.children;
            for (let index = 0; index < children.length; index++) {
                children[children.length - index - 1].setAttribute('x', Math.round(workspace.RTL ? width - xy.x : xy.x) + 400 * index);
                children[children.length - index - 1].setAttribute('y', Math.round(xy.y));
            }
        }
        workspace.clear();
        Blockly.Html.domToWorkspace(xml, workspace);
    }
}

function updatePreview(value) {
    if (value) {
        htmlValue = value;
    }
    previewChannel.postMessage(htmlValue);
}

function createPreviewIframe() {
    const iframe = document.createElement('iframe');
    iframe.id = 'preview';
    iframe.src = 'preview';
    return iframe;
}

function createPreviewWindow() {
    window.open('preview');
}

function timeout(time) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time);
    });
}


window.onload = start;