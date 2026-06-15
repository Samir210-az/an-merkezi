const CACHE_NAME = 'an-merkezi-v1';
const urlsToCache = ['/an-merkezi/', '/an-merkezi/index.html'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(urlsToCache))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
