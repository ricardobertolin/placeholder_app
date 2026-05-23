const status = document.getElementById('status');

function setStatus(msg) {
  if (status) status.textContent = `Service worker: ${msg}`;
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./sw.js')
      .then((reg) => {
        const state = reg.active ? 'active' : reg.installing ? 'installing' : 'registered';
        setStatus(state);
      })
      .catch((err) => {
        setStatus('registration failed');
        console.error(err);
      });
  });
} else {
  setStatus('not supported');
}
