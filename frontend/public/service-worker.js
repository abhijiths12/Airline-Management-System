// // service-worker.js

// const CACHE_NAME = 'my-cache-v1';
// const urlsToCache = [
//   '/',
//   '/index.html',
//   '/style.css',
//   '/script.js',
//   '/offline.html'
// ];

// // Install event: caching assets
// self.addEventListener('install', event => {
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then(cache => {
//         console.log('Caching resources');
//         return cache.addAll(urlsToCache);
//       })
//   );
// });

// // Activate event: clean up old caches
// self.addEventListener('activate', event => {
//   const cacheWhitelist = [CACHE_NAME];
//   event.waitUntil(
//     caches.keys().then(cacheNames => {
//       return Promise.all(
//         cacheNames.map(cacheName => {
//           if (!cacheWhitelist.includes(cacheName)) {
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// });

// // Fetch event: serve cached assets or network if available
// self.addEventListener('fetch', event => {
//   event.respondWith(
//     caches.match(event.request)
//       .then(cachedResponse => {
//         // Return cached response if available, otherwise fetch from network
//         return cachedResponse || fetch(event.request);
//       })
//   );
// });
