
(function () {
    const iframe = document.getElementById('preview');
    const favicon = document.getElementById('favicon');
    const previewChannel = new BroadcastChannel('prev');
    let prevDocument;
    let prevDomBody;
    let prevBodyFrame;
    let directory;
    previewChannel.addEventListener('message', msg => {
        if (typeof msg.data === 'string') {
            viewHtml(msg.data);
        } else if (typeof msg.data === 'object') {
            directory = msg.data;
            if (prevDocument) {
                const xmlS = new XMLSerializer();
                const html = xmlS.serializeToString(prevDocument).replace('<html xmlns="http://www.w3.org/1999/xhtml"', '<html');
                viewHtml(html);
            }
        }
    });

    async function viewHtml(html) {
        const domP = new DOMParser();
        const newDocument = domP.parseFromString(html, 'text/html');
        const newAll = newDocument.getElementsByTagName('*');
        for (const iterator of newAll) {
            if (iterator.hasAttribute('src')) {
                const attr = iterator.getAttribute('src');
                iterator.setAttribute('src', await pathToUrl(attr));
            }
            if (iterator.hasAttribute('href')) {
                const attr = iterator.getAttribute('href');
                iterator.setAttribute('href', await pathToUrl(attr));
            }
        }
        const newDomHtml = newDocument.body.parentElement;
        const newDomBody = newDocument.body;
        const newBodyFrame = newDomHtml.outerHTML.replace(newDomBody.innerHTML, '');
        if (prevDocument &&
            prevBodyFrame === newBodyFrame &&
            iframe.contentDocument) {
            iframe.contentDocument.body.innerHTML = newDomBody.innerHTML;
        } else {
            setIframe(newDocument);
        }
        prevDocument = newDocument;
        prevDomBody = newDomBody;
        prevBodyFrame = newBodyFrame;
    }

    function setIframe(newDocument) {
        const xmlS = new XMLSerializer();
        const html = xmlS.serializeToString(newDocument).replace('<html xmlns="http://www.w3.org/1999/xhtml"', '<html');
        const blob = new Blob([html], { type: "text/html" });
        const url = URL.createObjectURL(blob);
        iframe.src = url;
        document.title = newDocument.title;
        const links = newDocument.head.getElementsByTagName('link');
        [...links].forEach(e => {
            if (e.rel.match(/^icon$/)) {
                favicon.href = e.href;
            }
        });
    }

    async function pathToUrl(path) {
        let result = path;
        if (path.match(/^.*:\//)) return result;
        const pathArray = result.replace(/^\//, '').split('/');
        let depth = 0;
        let dire = directory;
        while (depth !== pathArray.length) {
            if (depth !== pathArray.length - 1) {
                const df = await dirFind(dire, pathArray[depth], true);
                if (df) {
                    dire = await df.values();
                    depth++;
                } else {
                    depth = pathArray.length;
                }
            } else {
                const df = await dirFind(dire, pathArray[depth], false);
                if (df) {
                    const file = await df.getFile();
                    const url = URL.createObjectURL(file);
                    result = url;
                    depth++;
                } else {
                    depth = pathArray.length;
                }
            }
        }
        return result;
    }

    async function dirFind(dire, name, isdir) {
        for await (const entry of dire) {
            if (isdir) {
                if (entry.name === name && entry.kind === 'directory') return entry;
            } else {
                if (entry.name === name && entry.kind === 'file') return entry;
            }
        }
        return false;
    }

    window.onload = () => previewChannel.postMessage('');
})();