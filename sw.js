// Register your service worker:
// navigator.serviceWorker.register('http://127.0.0.1:3306/bs/bssw.js');

// // Then later, request a one-off sync:
// navigator.serviceWorker.ready.then(function(swRegistration) {
//   return swRegistration.sync.register('myFirstSync');
// });
if('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
   navigator.serviceWorker.register('sw.js')
   .then((registration) => {
     console.log("Service Worker registration successful")
    }, (err) => {
     console.log("Registration failed")
    })
   })
 }

 self.addEventListener("sync", event => {
  if (event.tag.substring(0, 2)=="hi") {
      const name = event.tag.substring(3);
      event.waitUntil(
          fetch(`/hi`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name}), 
        })
              .then(r => console.log("prom", r.text()))
          )
  }
})
self.addEventListener('fetch', 
function(e){
  if (e.request.method=="POST"){
    console.log("POst")
  }
    console.log("fetch", e.request.url)
  e.respondWith(
    caches.match(e.request)
    .then(response=>{
      return response||fetch(e.request)
    })
  )
}
)