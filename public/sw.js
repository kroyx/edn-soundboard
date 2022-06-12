const CACHE_NAME = 'v2_cache_edn_soundboard';
const urlsToCache = [
  './index.html',
  './assets/index.js',
  './assets/index.css',
  './img/favicon.png',
  './audios/abreLaBocaHay.mp3',
  './audios/borraLaFoto.mp3',
  './audios/byv.mp3',
  './audios/ceroGrasasTrans.mp3',
  './audios/cervezaIpa.mp3',
  './audios/disculpaPedofilo.mp3',
  './audios/disculpaSiTeOfendo.mp3',
  './audios/endorfina.mp3',
  './audios/enLasNalgasTuyas.mp3',
  './audios/eresMillenial.mp3',
  './audios/escuchameEstoLoca.mp3',
  './audios/goloso.mp3',
  './audios/hadouken2.mp3',
  './audios/hadouken.mp3',
  './audios/heSidoUnDelincuente.mp3',
  './audios/izquierda.mp3',
  './audios/laCague.mp3',
  './audios/llegaronLosComediantes.mp3',
  './audios/messiSeVa.mp3',
  './audios/nadieVeMisPoss.mp3',
  './audios/noTeHagasLaPaja.mp3',
  './audios/palomaEnLaCabeza.mp3',
  './audios/pata.mp3',
  './audios/ponteDePunticas.mp3',
  './audios/queBichoMasPerdedor.mp3',
  './audios/queBichoTanPargo.mp3',
  './audios/queMandarriaCompadre.mp3',
  './audios/quePatetico.mp3',
  './audios/respeta.mp3',
  './audios/teOfendiste.mp3',
  './audios/teVasAVolverAOfender.mp3',
  './audios/ustedEsBellisimo.mp3',
  './audios/vinimosAVisitarte.mp3',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('instalando cache : ' + CACHE_NAME)
      return cache.addAll(urlsToCache);
    }),
  );
});

self.addEventListener('activate', (e) => {
  const cacheWhiteList = [CACHE_NAME];
  e.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        cacheNames.map((cacheName) => {
          if (cacheWhiteList.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        });
      })
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request)
      .then((res) => {
        if (res) {
          return res;
        }
        return fetch(e.request);
      }),
  );
});
