const CACHE_NAME1 = "wpe-cache1-v1";
const CACHE_NAME2 = "wpe-cache2-v1";

const PRE_CACHED_RESOURCES1 = [
    "/", "style.css",
    "blocks/blockly_compressed_vertical.js", "blocks/blocks_compressed_vertical.js", "blocks/blocks_compressed.js",
    "blocks/msg/messages.js", "blocks/msg/webeditor_msgs.js",
    "preview/index.html", "preview/preview.js",
    "dist/app.js"
];
const PRE_CACHED_RESOURCES2 = [
    "dist/1157.app.js", "dist/1194.app.js", "dist/1223.app.js", "dist/1231.app.js", "dist/1297.app.js", "dist/1310.app.js", "dist/1367.app.js", "dist/1554.app.js", "dist/1587.app.js", "dist/1607.app.js", "dist/1698.app.js", "dist/1841.app.js", "dist/1863.app.js", "dist/1957.app.js", "dist/2002.app.js", "dist/2028.app.js", "dist/2195.app.js", "dist/2719.app.js", "dist/2729.app.js", "dist/2777.app.js", "dist/2802.app.js", "dist/2857.app.js", "dist/2902.app.js", "dist/2990.app.js", "dist/3090.app.js", "dist/3265.app.js", "dist/3573.app.js", "dist/3596.app.js", "dist/4204.app.js", "dist/426.app.js", "dist/4295.app.js", "dist/4301.app.js", "dist/4352.app.js", "dist/4459.app.js", "dist/4546.app.js", "dist/4573.app.js", "dist/4852.app.js", "dist/5174.app.js", "dist/5215.app.js", "dist/5303.app.js", "dist/5364.app.js", "dist/5530.app.js", "dist/5927.app.js", "dist/6018.app.js", "dist/6060.app.js", "dist/624.app.js", "dist/6631.app.js", "dist/6793.app.js", "dist/7084.app.js", "dist/7168.app.js", "dist/7469.app.js", "dist/7526.app.js", "dist/7673.app.js", "dist/7700.app.js", "dist/7722.app.js", "dist/7882.app.js", "dist/7895.app.js", "dist/7922.app.js", "dist/7930.app.js", "dist/7978.app.js", "dist/7996.app.js", "dist/8019.app.js", "dist/81.app.js", "dist/8139.app.js", "dist/8142.app.js", "dist/8167.app.js", "dist/8171.app.js", "dist/8269.app.js", "dist/8509.app.js", "dist/8557.app.js", "dist/8645.app.js", "dist/8786.app.js", "dist/882.app.js", "dist/8938.app.js", "dist/9217.app.js", "dist/9220.app.js", "dist/9416.app.js", "dist/9549.app.js", "dist/972.app.js", "dist/9760.app.js", "dist/9770.app.js", "dist/9916.app.js", "dist/app.js", "dist/b797181c93b3755f4fa1.ttf", "dist/css.worker.js", "dist/editor.worker.js", "dist/html.worker.js", "dist/json.worker.js", "dist/ts.worker.js",
    "blocks/media/1x1.gif", "blocks/media/delete-x.svg", "blocks/media/eyedropper.svg", "blocks/media/repeat.svg", "blocks/media/status-ready.svg", "blocks/media/click.mp3", "blocks/media/delete.mp3", "blocks/media/green-flag.svg", "blocks/media/rotate-left.svg", "blocks/media/zoom-in.svg", "blocks/media/click.ogg", "blocks/media/delete.ogg", "blocks/media/handclosed.cur", "blocks/media/rotate-right.svg", "blocks/media/zoom-out.svg", "blocks/media/click.wav", "blocks/media/delete.wav", "blocks/media/handdelete.cur", "blocks/media/sprites.png", "blocks/media/zoom-reset.svg", "blocks/media/comment-arrow-down.svg", "blocks/media/dropdown-arrow-dark.svg", "blocks/media/handopen.cur", "blocks/media/sprites.svg", "blocks/media/comment-arrow-up.svg", "blocks/media/dropdown-arrow.svg", "blocks/media/status-not-ready.svg",
    "blocks/media/icons/arrow.svg", "blocks/media/icons/control_forever.svg", "blocks/media/icons/control_stop.svg", "blocks/media/icons/event_whenflagclicked.svg", "blocks/media/icons/arrow_button.svg", "blocks/media/icons/control_repeat.svg", "blocks/media/icons/control_wait.svg", "blocks/media/icons/remove.svg",
    "src/img/play.svg", "src/img/popup.svg", "src/img/stop.svg",
    "128.png", "favicon.ico"
];

self.addEventListener("install", event => {
    async function preCacheResources() {
        // List all caches by their names.
        const names = await caches.keys();
        let cache_changed1 = true;
        let cache_changed2 = true;
        names.forEach(e => {
            if (e === CACHE_NAME1) {
                cache_changed1 = false;
            }
            if (e === CACHE_NAME2) {
                cache_changed2 = false;
            }
        });
        if (cache_changed1) {
            const cache = await caches.open(CACHE_NAME1);
            // Cache all static resources.
            cache.addAll(PRE_CACHED_RESOURCES1);
        }
        if (cache_changed2) {
            const cache = await caches.open(CACHE_NAME2);
            // Cache all static resources.
            cache.addAll(PRE_CACHED_RESOURCES2);
        }
    }

    event.waitUntil(preCacheResources());
});

self.addEventListener("fetch", event => {
    async function returnCachedResource() {
        // Open the app's cache.
        const cache1 = await caches.open(CACHE_NAME1);
        // Find the response that was pre-cached during the `install` event.
        const cachedResponse1 = await cache1.match(event.request.url);

        if (cachedResponse1) {
            // Return the resource.
            return cachedResponse1;
        } else {
            // Open the app's cache.
            const cache2 = await caches.open(CACHE_NAME2);
            // Find the response that was pre-cached during the `install` event.
            const cachedResponse2 = await cache2.match(event.request.url);
            if (cachedResponse2) {
                return cachedResponse2;
            } else {
                // The resource wasn't found in the cache, so fetch it from the network.
                const fetchResponse = await fetch(event.request.url);
                // Put the response in cache.
                cache1.put(event.request.url, fetchResponse.clone());
                // And return the response.
                return fetchResponse;
            }
        }
    }

    event.respondWith(returnCachedResource());
});

// Listen to the `activate` event to clear old caches.
self.addEventListener("activate", event => {
    async function deleteOldCaches() {
        // List all caches by their names.
        const names = await caches.keys();
        await Promise.all(names.map(name => {
            if (name !== CACHE_NAME1 && name !== CACHE_NAME2) {
                // If a cache's name is the current name, delete it.
                return caches.delete(name);
            }
        }));
    }

    event.waitUntil(deleteOldCaches());
});