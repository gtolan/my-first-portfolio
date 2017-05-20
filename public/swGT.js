//////Step 1
////
//importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-app.js');
////// Import scripts such as hosting or libraries
////
////// Example of initializing the Firebase in the service worker by passing in the
////// messagingSenderId.
//firebase.initializeApp({
//  'messagingSenderId': '529077192868'
//});
//
//// Retrieve an instance of Firebase Messaging so that it can handle background
//// messages.
//const messaging = firebase.messaging();


// Names of the two caches used in this version of the service worker.
// Change to v2, etc. when you update any of the local resources, which will
// in turn trigger the install event again.
const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';

// A list of local resources we always want to be cached.
const PRECACHE_URLS = [
  
        '/index.html',
        '/images/favicon5.png',
        '/style.css',
        '/mediaQueries.css',
        '/app.js',
        '/swGT.js',
        '/images/codepenIcon.png',
        '/images/lampIcon.jpg',
        '/images/libraryIcon.png',
        '/images/moreIcon.png',
        '/images/theServiceWorkerIMG.png',
        '/images/alison.png',
        '/images/certif.png',
        '/images/deferasync.png',
        '/images/delkoproExample.png',
        '/images/griffith.png',
        '/images/jsanimation.png',
        '/images/kpiIcon.png',
        '/images/messIconTwo.png',
        '/images/playIcon.png',
        '/images/renderpath.png',
        '/images/scalingIcon.png',
        '/images/serviceW.png',
        '/images/waterfall.png',
        '/images/blogIcon.png',
        '/images/briefcase2.png',
        '/images/favicon5.png',
        '/images/iconCode.png',
        '/images/iconHead.png',
        '/images/kpiIco5.png',
        '/images/movpay.png',
        '/images/orderin24.png',
        '/images/pwaApp.png',
        '/images/quals.png',
        '/images/scrollIcon.png',
        '/images/scrollIcon2.png',
        '/images/seoIco3.png',
        '/images/seoIcon.png',
        '/images/sideNavIc.png',
        '/images/sideNavIcon2.png',
        '/images/strategyIco4.png',
        '/images/strategyIcon.png',
        '/images/tyd24.png',
        '/images/3dAnim.png',
        '/images/3dAnimation.png',
        '/images/blogIconImg.png',
        '/images/briefcase.png',
        '/images/buttonIcon2.png',
        '/images/buttonIconLib.png',
        '/images/diamondIcon.png',
        '/images/dragIcon.png',
        '/images/frontEnddip.png',
        '/images/iabspain.png',
        '/images/jsAnimIcon.png',
        '/images/mailIcon.png',
        '/images/meanIcon.png',
        '/images/notting.png',
        '/images/pageSpeed.png',
        '/images/scaleIcon.png',
        '/images/trafficIcon3.png',
        '/images/udacityIco.png',
        '/images/consult.png',
        '/images/dialogIcon.png',
        '/images/dragnDrop.png',
        '/images/fluidfont.png',
        '/images/fluxcard.png',
        '/images/googleplusIcon.png',
        '/images/gtprof.png',
        '/images/homeico2.png',
        '/images/homeIco3.png', 
        '/images/imageopt.png',
        '/images/linkedinIcon.png',
        '/images/linkedinIcon2.png',
        '/images/listIcon.png',
        '/images/messIconThree.png',
        '/images/openRight.png',
        '/images/openTop.png',
        '/images/photoshop.png',
        '/images/serviceWorkerIcon.png',
        '/images/sideNavIcon.png',
        '/images/thermoIcon.png',
        '/images/cssAnimExample.png',
        '/images/fluidGif.gif',
        '/images/dataBases.png',
        '/images/geometrice2.png',
        '/images/skillsOne.png',
        '/images/tools.png'
  ];
//Step 2
// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  );
});

//step 3
// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener('fetch', event => {
  // Skip cross-origin requests, like those for Google Analytics.
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(RUNTIME).then(cache => {
          return fetch(event.request).then(response => {
            // Put a copy of the response in the runtime cache.
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
    );
  }
});