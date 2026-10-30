// Keeps Colorblocking working offline. tool/build_web.ps1 writes this
// build's version and files below.
//
// The app's files are cached on the first visit and served from the cache
// after that, so the app opens with no connection. A new version installs in
// the background the next time the app is opened online, and takes over the
// time after that (one version at a time: no mixing of old and new files).
const VERSION = '0.1.0+1-4f3506b-202610301443';
const FILES = [
  'assets/AssetManifest.bin',
  'assets/AssetManifest.bin.json',
  'assets/assets/app_icon.png',
  'assets/assets/fonts/Roboto-Bold.ttf',
  'assets/assets/fonts/Roboto-Medium.ttf',
  'assets/assets/fonts/Roboto-Regular.ttf',
  'assets/FontManifest.json',
  'assets/fonts/MaterialIcons-Regular.otf',
  'assets/NOTICES',
  'assets/shaders/ink_sparkle.frag',
  'assets/shaders/stretch_effect.frag',
  'assets/THIRD_PARTY.md',
  'canvaskit/canvaskit.js',
  'canvaskit/canvaskit.wasm',
  'canvaskit/chromium/canvaskit.js',
  'canvaskit/chromium/canvaskit.wasm',
  'engine_worker.js',
  'favicon.png',
  'flutter.js',
  'flutter_bootstrap.js',
  'icons/apple-touch-icon.png',
  'icons/Icon-192.png',
  'icons/Icon-512.png',
  'icons/Icon-maskable-192.png',
  'icons/Icon-maskable-512.png',
  'index.html',
  'main.dart.js',
  'manifest.json',
];
const CACHE = `colorblocking-${VERSION}`;
const SCOPE = new URL('./', self.location).pathname;

// The CanvasKit build this browser will load (Flutter picks the Chromium one
// in Chrome and Edge, which alone have userAgentData; a service worker has no
// navigator.vendor); the other is cached only if it is ever fetched.
const chromium = 'userAgentData' in self.navigator;
const precache = FILES.filter((f) =>
  chromium ? !f.startsWith('canvaskit/canvaskit.') : !f.startsWith('canvaskit/chromium/'));

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(['./', ...precache])));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((k) => k.startsWith('colorblocking-') && k !== CACHE)
        .map((k) => caches.delete(k)),
    )).then(() => self.clients.claim()), // the first visit too, from now on
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin ||
      !url.pathname.startsWith(SCOPE)) {
    return;
  }
  event.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const key = request.mode === 'navigate' ? './' : request;
      const hit = await cache.match(key, { ignoreSearch: true });
      if (hit) return hit;
      const response = await fetch(request);
      if (response.ok && request.mode !== 'navigate') {
        cache.put(request, response.clone());
      }
      return response;
    }),
  );
});
