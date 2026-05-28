const CACHE_NAME = "portfolio-wilfried-v3";

const APP_SHELL = [
  "/portfolio/",
  "/portfolio/manifest.webmanifest",
  "/portfolio/images/logo.png",
  "/portfolio/images/pwa-192.png",
  "/portfolio/images/pwa-512.png",
  "/portfolio/images/pwa-maskable-512.png",
  "/portfolio/images/apple-touch-icon.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await Promise.allSettled(APP_SHELL.map((url) => cache.add(url)));
    })
  );

  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => cacheName !== CACHE_NAME)
            .map((cacheName) => caches.delete(cacheName))
        );
      })
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const requestUrl = new URL(event.request.url);

  // Ignore les requêtes internes Chrome, extensions, devtools, etc.
  if (!["http:", "https:"].includes(requestUrl.protocol)) {
    return;
  }

  // Ignore les ressources qui ne viennent pas du même domaine
  if (requestUrl.origin !== self.location.origin) {
    return;
  }

  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request).catch(async () => {
        return (await caches.match("/portfolio/")) || Response.error();
      })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;

      return fetch(event.request)
        .then((response) => {
          if (!response || response.status !== 200 || response.type !== "basic") {
            return response;
          }

          const responseClone = response.clone();

          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });

          return response;
        })
        .catch(() => Response.error());
    })
  );
});