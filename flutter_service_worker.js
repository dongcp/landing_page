'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "32e360674fdeac72cbdd1b1dea8c6783",
"index.html": "95d7790f49187b8991b2619da0dd9879",
"/": "95d7790f49187b8991b2619da0dd9879",
"main.dart.js": "62c0bf06a9d3796048c162da1d44f86a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f506f0523200571eedc3590a4815a928",
".git/config": "2095b85492fe7939330e13d65b2e122c",
".git/objects/0d/a6c6f30a00191dc90a3a21989629bb8ebe2a6a": "9604c048fc8a15debda1bd3c3e63cb49",
".git/objects/59/467057ffdf31e562fceacf5a12fa86b5a7e1fe": "f958b5efdd8fa8b61b9d94e96f2a859b",
".git/objects/04/daa301830093db6bf85c2dc9291398d8391319": "2d811318e13891241439f7bde39ee5c4",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/56/cb34b7f8bb9dfda46cb113ab3ed7677518d641": "e428c355ab4ee88e955cdd6288a897d4",
".git/objects/05/9f09a015614d2c003ba250fd4d13e9dd03fe60": "d94009add039a46503483b4d918e28cc",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/fd/bcc3e4eda5f949979bf0be3337ca06c3ab542f": "57faf16011f6279c7b2710c2cbef1150",
".git/objects/e3/db70be9d190e414968acaeb539bc47d89c3fdc": "56a4a3294897a7c3b3a01101f19994b5",
".git/objects/ec/204c0a440e60bce4e6dc2918376c5fad74369e": "21b5a1c911ed6c0b74dd3f200cac282e",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/7d/df265b6d605093353534797032434d8cef674a": "57bd3a515ac3e876f69aad07f0e46c7c",
".git/objects/89/3ee6302a7259b01bbe6de6188d901d56745d17": "4cbc8b2a95a5c485ef9d4d26c858d22c",
".git/objects/28/1bf0d1b2ee9f6c224d8aac4f539bbdbbcd539c": "51f98fc88bf678a5dec049b72f4e1a82",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/96/800fd7898cd0a8c0f0c1380b6afd0021e6fed2": "3f0ab1ac7fbc207a3b5218a1414799a2",
".git/objects/01/bcb87684c82f73d2fef9d8831372e08b3edd16": "dad7d452ab0bb7c29dafd70c3bcc99af",
".git/objects/bf/345f01da73dfc106b0d9105be32edd54e8779b": "13850580461b422724fee36e9ac0859e",
".git/objects/d3/fceb6692005ed439b7eb7fdf56006a7b937f80": "ffb3185a5c64aeec1e137e7b4e2651c5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/f7/a5d9fa7e62bb9e2e0a78c0607056b1fa3fea74": "a8377720f4c0a2da70044f2d66cb0ebd",
".git/objects/c2/8f235d29b689ce9b3b481006b80d91a7f07be8": "28ad0917c268dbe3aeab84b9919e88aa",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/6327e5691ddbd3b3e6f2f10907bdd5d85c4b6a": "6bdc0931b4942598803af623a2683955",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/9480d8ab604a95fca4cb6ec61994d889269bc4": "b8329afd837b30477f8af2df1862704b",
".git/objects/48/67667c05df5a5a8209ec267b5a4bc69bb5b63d": "53a9c76b1be6840de2f8135ef9394137",
".git/objects/24/bfee4840dc52b702a8506ec5e4662c2c833fa4": "a23eb4b4b725d268aceb1017d25cee71",
".git/objects/14/cba48434df4e9292458b439c23be982c39be7f": "04644aa3ba91c890364d9500e79921ee",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8fce41ae7a4f6942c51ea01c18cb507c",
".git/logs/refs/heads/master": "8fce41ae7a4f6942c51ea01c18cb507c",
".git/logs/refs/remotes/origin/master": "7500adb8586ed235ae184aff42429d30",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "77d7e92dbdd4b87442e91ee4df1b8e2d",
".git/refs/remotes/origin/master": "77d7e92dbdd4b87442e91ee4df1b8e2d",
".git/index": "d1649f779c0970cfe61afec0243f23bf",
".git/COMMIT_EDITMSG": "ad9235abb88576f2f435d1507b1a2866",
"assets/AssetManifest.json": "b5aab1174188baf6e38205fab4dc2657",
"assets/NOTICES": "330551c2dd62d80ebc89a6cc36cd40a9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/ic_discord.svg": "2ca4611a30c45639b8771a5a625005db",
"assets/assets/images/ic_twitter.svg": "1db9e9c352df34dd25e86db386f3d62b",
"assets/assets/images/img_body.png": "92b35fe993791408c039b5372fbf13a1",
"assets/assets/images/logo_text.png": "3aaf2ad399671ff29b6af61f77f251f0",
"assets/assets/images/divider.png": "b7aabbfb6fb038d2d7997bec7831a766",
"assets/assets/images/img_welcome.png": "8813ab92f548727aab8f6191316fc9be",
"assets/assets/images/ic_telegram.svg": "b91cc43ec2a72c3e999aff767e2e0c76",
"assets/assets/images/ic_github.svg": "1f33e75d7b7df995b1609f8573ac8c9b",
"assets/assets/images/img_logo.png": "79979cd551ddd94c61a4d15937be2022"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
