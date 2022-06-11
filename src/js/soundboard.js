import sonidos from './sonidos.json';

const $audios = document.querySelector('#audios');
const $soundboard = document.querySelector('#soundboard');
const $logo = document.querySelector('#logo');

const sonidosAleatorios = sonidos.sort(() => 0.5 - Math.random());

const etiquetasAudio = sonidos.map((sonido) => `
  <audio id="${sonido.archivo}" src="audios/${sonido.archivo}.mp3"></audio>
`).join(' ');
const etiquetasBoton = sonidosAleatorios.map((sonido) => `
  <button class="boton" data-sonido="${sonido.archivo}">${sonido.titulo}</button>
`).join(' ');

$audios.innerHTML = etiquetasAudio;
$soundboard.innerHTML = etiquetasBoton;

const detenerSonidos = () => {
  sonidos.forEach((sonido) => {
    const $audio = document.querySelector(`#${sonido.archivo}`);
    $audio.pause();
    $audio.currentTime = 0;
  })
}

$soundboard.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const dataSet = e.target.dataset.sonido;
    const $audio = document.querySelector(`#${dataSet}`);

    detenerSonidos();
    $audio.play();

    e.target.classList.add('activo');
    e.target.setAttribute('disabled', '');
    $logo.classList.add('vibra');

    $audio.addEventListener('pause', () => {
      e.target.classList.remove('activo');
      e.target.removeAttribute('disabled');
    });

    $audio.addEventListener('ended', () => {
      e.target.classList.remove('activo');
      e.target.removeAttribute('disabled');
      $logo.classList.remove('vibra');
    });
  }
});
