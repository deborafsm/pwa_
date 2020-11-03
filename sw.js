self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('fox-store').then(function(cache) {
     return cache.addAll([
       
	   '/WebCipa_Projeto-Integrado-master/',
       '/WebCipa_Projeto-Integrado-master/index.html',
       '/WebCipa_Projeto-Integrado-master/index.js'
       '/WebCipa_Projeto-Integrado-master/_images/brand.png',
       '/WebCipa_Projeto-Integrado-master/_images/cait.jpg',
	   '/WebCipa_Projeto-Integrado-master/_images/ezreal.png',
	   '/WebCipa_Projeto-Integrado-master/_images/riven.jpg'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
