// Choose a cache name
const cacheName = 'cache-v1'

// List the files to precache
const precacheResources = [
  './',
  './manifest.json',
  './sw.js',
  './index.html',
  './main.css',
  './assets/logo/128.png',
  './assets/logo/192.png',
  './assets/logo/256.png',
  './assets/logo/384.png',
  './assets/logo/512.png',
  './assets/audio/clique.mp3',
  './assets/audio/credito.mp3',
  './assets/audio/erro.mp3',
  './assets/audio/musicadefundo.mp3',
  './assets/audio/musicasalas.mp3',
  './assets/audio/somcorrendo.mp3',
  './assets/audio/somestrela.mp3',
  './assets/audio/sommoeda.mp3',
  './assets/botoes/baixo.png',
  './assets/botoes/botaobola.png',
  './assets/botoes/cima.png',
  './assets/botoes/direita.png',
  './assets/botoes/esquerda.png',
  './assets/botoes/menu.png',
  './assets/botoes/proximo.png',
  './assets/botoes/repetir.png',
  './assets/botoes/sala1.png',
  './assets/botoes/sala2.png',
  './assets/botoes/sala3.png',
  './assets/botoes/sala4.png',
  './assets/botoes/sala5.png',
  './assets/botoes/sala6.png',
  './assets/botoes/sala7.png',
  './assets/botoes/sala8.png',
  './assets/botoes/sala9.png',
  './assets/botoes/tela-cheia.png',
  './assets/cenas/anuncio.png',
  './assets/cenas/cenaabertura.png',
  './assets/cenas/cenacarta1.png',
  './assets/cenas/cenacarta2.png',
  './assets/cenas/cenaencerramento.png',
  './assets/cenas/cenaespera.png',
  './assets/cenas/cenafase1.png',
  './assets/cenas/cenaperdeu.png',
  './assets/cenas/cenaprologo.png',
  './assets/cenas/cenasala.png',
  './assets/cenas/cenaselecao.png',
  './assets/cenas/cenatentarnovamente.png',
  './assets/cenas/cenavitoria.png',
  './assets/cenas/credito.png',
  './assets/cenas/dialogo.png',
  './assets/cenas/fundopreto.png',
  './assets/cenas/mapa1.png',
  './assets/cenas/panfleto.png',
  './assets/cenas/tutorial.png',
  './assets/fases/agua.png',
  './assets/fases/c1.png',
  './assets/fases/c2.png',
  './assets/fases/c3.png',
  './assets/fases/dec1.png',
  './assets/fases/dec2.png',
  './assets/fases/escada.png',
  './assets/fases/esp1.png',
  './assets/fases/esp2.png',
  './assets/fases/esp3.png',
  './assets/fases/esp4.png',
  './assets/fases/estrela.png',
  './assets/fases/fases.json',
  './assets/fases/lava.png',
  './assets/fases/moeda.png',
  './assets/fases/scoreestrela.png',
  './assets/fases/scoremoeda.png',
  './assets/fases/seta.png',
  './assets/fases/tilearv.png',
  './assets/fases/tilebloc.png',
  './assets/fases/tiletrave.png',
  './assets/fases/trave.png',
  './assets/fases/vida.png',
  './assets/personagens/bola.png',
  './assets/personagens/ini1.png',
  './assets/personagens/ini1walk.png',
  './assets/personagens/ini2.png',
  './assets/personagens/ini2carro.png',
  './assets/personagens/ini2walk.png',
  './assets/personagens/skiler.png',
  './assets/personagens/steve.png',
  './assets/slkscre.ttf',
  './js/axios.min.js',
  './js/cena-anuncio.js',
  './js/cena-dialogo.js',
  './js/cena-fim-do-jogo.js',
  './js/cena-panfleto.js',
  './js/cena-tutorial.js',
  './js/cena0.js',
  './js/cena1.js',
  './js/cena2.js',
  './js/cena4.js',
  './js/cenapersonagem.js',
  './js/cenaprologo.js',
  './js/config.js',
  './js/encerramento.js',
  './js/finalFeliz.js',
  './js/gameover.js',
  './js/index.js',
  './js/phaser.min.js',
  './js/tentarnovamente.js'
]

// When the service worker is installing, open the cache and add the precache resources to it
self.addEventListener('install', (event) => {
  console.log('Service worker install event!')
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(precacheResources)))
})

self.addEventListener('activate', (event) => {
  console.log('Service worker activate event!')
})

// When there's an incoming fetch request, try and respond with a precached resource, otherwise fall back to the network
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request)
    })
  )
})
