const CACHE = {
  name: 'mattdumler-app-cache-v0',
  urls: [ '/', '/styles.css', '/main.js' ]
};

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE.name)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(CACHE.urls);
      })
  );
});

