self.addEventListener('install',function(){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(clients.claim())});
self.addEventListener('fetch',function(e){var r=e.request;if(r.method!=='GET'||r.url.indexOf(self.location.origin)!==0)return;
e.respondWith(fetch(r).then(function(x){var c=x.clone();caches.open('v1').then(function(k){k.put(r,c)});return x}).catch(function(){return caches.match(r)}))});
