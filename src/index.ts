import './styles/style.scss';
import flightLogo from './assets/ft_logo.png';
import pikachu from './assets/pikachu.gif';
import { runFlightTracker } from './js/modules/flightTracker';

const logo = document.getElementById('logo') as HTMLImageElement;
logo.src = flightLogo;
const pikachuLoadingGif = document.getElementById('pikachu-gif') as HTMLImageElement;
pikachuLoadingGif.src = pikachu;

runFlightTracker();
