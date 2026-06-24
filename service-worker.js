const CACHE_NAME = "opic-pwa-v11-2";
const ASSETS = ["./","./index.html","./data.js","./manifest.json","./icon-192.png","./icon-512.png","./baekho-smile.png","./baekho-rest.png","./baekho-focus.png","./baekho-mascot-set.png"];
self.addEventListener("install", event => {event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).catch(() => null));self.skipWaiting();});
self.addEventListener("activate", event => {event.waitUntil(caches.keys().then(keys => Promise.all(keys.map(key => {if (key !== CACHE_NAME) return caches.delete(key);})))) ;self.clients.claim();});
self.addEventListener("fetch", event => {if (event.request.method !== "GET") return;event.respondWith(fetch(event.request).then(response => {const clone=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(event.request,clone)).catch(()=>null);return response;}).catch(()=>caches.match(event.request)));});
