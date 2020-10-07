navigator.serviceWorker.register('./sw.js')
if(window.caches) {
  caches.open('meuCache').add('/index.html');
}
function carrega(recurso) {
  let reposta = caches.open('meuCache').then( function(cache) {
    return cache.match('/index.html').then( function(recurso) {
      if(recurso) return recurso;
      return fetch('/index.html');
    });
  });
  return resposta;
}
