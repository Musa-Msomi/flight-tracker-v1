import './styles/style.scss'
import flightLogo from './assets/ft_logo.png'
import pikachu from './assets/pikachu.gif';
import { runFlightTracker } from './js/modules/flightTracker.js';

const logo = document.getElementById('logo');
logo.src = flightLogo;
const pikachuLoadingGif = document.getElementById('pikachu-gif');
pikachuLoadingGif.src = pikachu;

runFlightTracker();

