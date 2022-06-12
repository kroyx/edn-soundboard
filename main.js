import './style.scss';
import './src/js/soundboard';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/edn-soundboard/sw.js', { scope: '/edn-soundboard/' })
    .then((reg) => console.log('Registro de SW exitoso', reg))
    .catch((err) => console.warn('Error al tratar de registrar el SW', err));
}
