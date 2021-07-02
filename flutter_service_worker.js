'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b0a52ce88b5f28c4c4e29b2cd7d18d81",
".git/config": "d7a3ad2578b7644dbd8a702b63d2f3dc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "6005647281af7d49664d1d8e79462b18",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2a0768e90b2e8a532d1cac464acc64bd",
".git/logs/refs/heads/main": "bd5d52f2adaa3cb6cbd6071dcfa1d78a",
".git/objects/0e/1cece0edb65222ba034b8dd841e5567e73d3ce": "966e45833c0eaa099a7610692c43014c",
".git/objects/11/204856609b76005378edc8b3ff08ff61890bee": "c386508daa4858cdb9aed712882597d8",
".git/objects/14/dcc054ebbdd057c67e3fb6329ce4f261519941": "16e5480646e48ba87eb5df48212048f2",
".git/objects/16/59cf53d9f367c1ceedb75e477726646b9bf50c": "38862d5b3f96c365bbd38b51d73ff8f7",
".git/objects/17/3ed493278d614a65929d27ac91c206242e6346": "bef2e5cc393bfabf2eea4bb467145913",
".git/objects/1a/cb64ca867eaeaecd0d0cbe5748a574c46af9d7": "f9f6ea6cdd926a71a8a68c2731489891",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/2a/4005c01ccd374900f7f493401fcde00dc1674f": "7c60897dc2f07768c99460a1b30395d8",
".git/objects/2f/493cdbc43186552ab093808c62104a9dac66f4": "af3281b1492c6eff881d1200d9c73551",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/38/76e21f9b60b40366f20e8c9c83ad2f0445a09a": "dd6077291dab2421b34786a7175f98c0",
".git/objects/58/2d036be1bf23d9477a907ce10cd9c09ee6326b": "a15f36505e4bc78bbc215796626ab30e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/d819fc8cd803b94a90788b56157274c68d21a4": "538e640f702305b3d17e2a6b7302d128",
".git/objects/80/b37b55b5b0004d7160f337795b5f1979b06a92": "f10cb9668950dc088bdb6661a6fa5944",
".git/objects/86/82d94623e575a4ecc9586a35fc909dff37fb2c": "0d4bde48638b5a89ca0d6460a09067bb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/d0b9106bd7b42618d1b674b6332dbf49728ad2": "638dfec51f173ad2d21aafa063f8a204",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/a8d6d7995c0514a4070c25222084d0db9b7c62": "eb65ea7d50029b8df61e68f5f8c97e49",
".git/objects/93/2bf08ff1a3a4f256c313d95665778322dcebf4": "af0e4033f3279d0ee41dcbabf6c20f13",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/51e5eac33be5ac1694e791d49c36e18f941511": "bb590aaa9f9385d2a185576d57ba4596",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bd/d8c57466fdf0b660510c527621915e825fc6f1": "96b734d9e7b01a3773475b279cf2e5f5",
".git/objects/cd/e5d169b30d20fd827ed7c7a164b79f53217949": "6fc3e5ddad11f38835c67c2e452df756",
".git/objects/cf/c7757d3cb1d29414e29117500544abb42d1c5a": "43265e8aa72b07f5384ff25a0e9ec60a",
".git/objects/d0/af4a41626b1575b10b1f9dde299ca96371ef08": "c5494c62fde31726ee8922366be5034e",
".git/objects/d2/0c4f468d2a5c2cc83ad9de1ef73d76d7e926c3": "7ea03aa53184c1234ccebf9b99351b73",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ee/b6e550e135bbb70d5868676302a4cef06c6c4f": "31b9f452f6704e56a830261c348609f1",
".git/refs/heads/main": "06f766f6312f17842d5336b8bec93e61",
"assets/AssetManifest.json": "e1db826e5737da2c7cc8c402a0b6017b",
"assets/assets/contact_us.jpg": "349f0f701b4e3254e754db6812afc7a2",
"assets/assets/DBS1.jpg": "da5589cbc071e356bf7a05fbe57bba67",
"assets/assets/dr.jpg": "c805dc6606c2cadf86d757c310018909",
"assets/assets/gradient.png": "85636b020a85d15bc4f498aea8f8f7c0",
"assets/assets/idds.jpg": "14885d07a52c321aaba578f1328b9a71",
"assets/assets/logo-transparent1.png": "e4771f333aefb0cabb3ae1dce15e2dd1",
"assets/assets/sacral%2520nerve%2520stimulation.png": "dcfa57571088fe3c569997785c8013f1",
"assets/assets/spinal%2520cord%2520stimulation.jpg": "d214909a434bd15624c5c247f275acff",
"assets/assets/vns.jpg": "23a7ff8bedcb052cf3b8ead3f6895d6c",
"assets/FontManifest.json": "b8cf9820a2a71052e6ee075dbdfd6599",
"assets/fonts/Bellina.ttf": "987f3f0c8f25767c2ac50fd9ba09bb7a",
"assets/fonts/Georgia%2520Regular%2520font.TTF": "f4b306eed95aa7d274840533be635532",
"assets/fonts/Glamore-lgE7w.otf": "b52c8aad52c0523291c71737d1478420",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Tactico.otf": "0a674525e9b097cdf630f2f59d9bd15f",
"assets/NOTICES": "a343d01e8cc8e460d0526fb92f70b5f9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "fe40bd1059e25059da01b5fc3823a280",
"/": "fe40bd1059e25059da01b5fc3823a280",
"main.dart.js": "d7b8e4229c46fbc05f04bf62912f8892",
"manifest.json": "c61657686386490f237f2ee372d7ad94",
"version.json": "447b9288e8e71b98949f2b3f97625cc1"
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
