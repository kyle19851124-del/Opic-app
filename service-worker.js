const CACHE_NAME="opic-pwa-v10-0";
const FILES_TO_CACHE=["./","./index.html","./data.js","./manifest.json","./icon-192.png","./icon-512.png","./baekho-smile.png","./baekho-rest.png","./baekho-focus.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(FILES_TO_CACHE)));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
