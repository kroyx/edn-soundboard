const CACHE_NAME = 'v1_cache_edn_soundboard';
const urlsToCache = [
  '/edn-soundboard/',
  '/edn-soundboard/index.html',
  '/edn-soundboard/assets/index.js',
  '/edn-soundboard/assets/index.css',
  '/edn-soundboard/img/favicon.png',
  '/edn-soundboard/audios/abreLaBocaHay.mp3',
  '/edn-soundboard/audios/borraLaFoto.mp3',
  '/edn-soundboard/audios/byv.mp3',
  '/edn-soundboard/audios/ceroGrasasTrans.mp3',
  '/edn-soundboard/audios/cervezaIpa.mp3',
  '/edn-soundboard/audios/disculpaPedofilo.mp3',
  '/edn-soundboard/audios/disculpaSiTeOfendo.mp3',
  '/edn-soundboard/audios/endorfina.mp3',
  '/edn-soundboard/audios/enLasNalgasTuyas.mp3',
  '/edn-soundboard/audios/eresMillenial.mp3',
  '/edn-soundboard/audios/escuchameEstoLoca.mp3',
  '/edn-soundboard/audios/esteViajeEsTanLargoQueVoyASerGay.mp3',
  '/edn-soundboard/audios/goloso.mp3',
  '/edn-soundboard/audios/hadouken2.mp3',
  '/edn-soundboard/audios/hadouken.mp3',
  '/edn-soundboard/audios/heSidoUnDelincuente.mp3',
  '/edn-soundboard/audios/izquierda.mp3',
  '/edn-soundboard/audios/laCague.mp3',
  '/edn-soundboard/audios/llegaronLosComediantes.mp3',
  '/edn-soundboard/audios/messiSeVa.mp3',
  '/edn-soundboard/audios/nadieVeMisPoss.mp3',
  '/edn-soundboard/audios/noTeHagasLaPaja.mp3',
  '/edn-soundboard/audios/palomaEnLaCabeza.mp3',
  '/edn-soundboard/audios/pata.mp3',
  '/edn-soundboard/audios/ponteDePunticas.mp3',
  '/edn-soundboard/audios/queBichoMasPerdedor.mp3',
  '/edn-soundboard/audios/queBichoTanPargo.mp3',
  '/edn-soundboard/audios/queMandarriaCompadre.mp3',
  '/edn-soundboard/audios/quePatetico.mp3',
  '/edn-soundboard/audios/respeta.mp3',
  '/edn-soundboard/audios/teOfendiste.mp3',
  '/edn-soundboard/audios/teVasAVolverAOfender.mp3',
  '/edn-soundboard/audios/ustedEsBellisimo.mp3',
  '/edn-soundboard/audios/vinimosAVisitarte.mp3',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
        console.log('instalando cache : ' + CACHE_NAME)
        return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('activate', (e) => {
  const cacheWhiteList = [ CACHE_NAME ];
  e.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        cacheNames.map((cacheName) => {
          if (cacheWhiteList.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      })
      .then(() => self.clients.claim())
  )
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request)
    .then((res) => {
      if (res) {
        return res;
      }
      return fetch(e.request)
    })
  )
});
