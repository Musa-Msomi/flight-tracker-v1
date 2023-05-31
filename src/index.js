import './styles/style.scss'
import flightLogo from './assets/ft_logo.png'
import pikachu from './assets/pikachu.gif';
import { populateTable } from './icaoTable.js'
import { myMap } from './flightLocation';

const logo = document.getElementById('logo');
logo.src = flightLogo;
const pikachuLoadingGif = document.getElementById('pikachu-gif');
pikachuLoadingGif.src = pikachu;

async function runFlightTracker() {
    try {

        await populateTable();
        myMap();

    } catch (error) {

        console.error(error);
    }
}

runFlightTracker();

