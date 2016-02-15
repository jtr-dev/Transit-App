self.addEventListener('install', function(event)){
  event.waitUntil{

  };
});


self.addEventListener('fetch', function(event){
  event.respondWith(
    fetch(event.request).then(function(response){
      if (response.status === 404) {
        //TODO: Instead, respond with gif
        //Using Network request
        //return fetch('/url/imgs/img.gif');
      }
      return response;
    }).catch(function(){

    })
  )
})
