
const CACHE_NAME = "jahiliya-v1";

const FILES = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./poems.js",
  "./manifest.json",

  "./poems/imru-al-qays.txt",
  "./poems/tarafa.txt",
  "./poems/zuhayr.txt",
  "./poems/labid.txt",
  "./poems/antara.txt",
  "./poems/amr-ibn-kulthum.txt",
  "./poems/al-harith.txt",

  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  if (event.request.url.startsWith(self.registration.scope)) {
    event.respondWith(
      caches.match(event.request)
        .then(cached => cached || fetch(event.request))
    );
  }
});
