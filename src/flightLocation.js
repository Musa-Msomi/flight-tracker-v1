import axios from 'axios'
export function myMap() {

    const tdElements = document.querySelectorAll('#flights-tbody td');
    const mapContainer = document.getElementById('map-container');
    let latitude = null;
    let longitude = null;

    tdElements.forEach((td) => {
        td.addEventListener('click', () => {

            const tdValue = td.textContent;

            let apiUrl = `https://opensky-network.org/api/tracks/all?icao24=${tdValue}&time=0`
            axios.get(apiUrl)
                .then((response) => {

                    let apiResponse = response.data;

                    let lastPathObjectInPathArray = apiResponse.path[apiResponse.path.length - 1];
                    latitude = lastPathObjectInPathArray[1];
                    longitude = lastPathObjectInPathArray[2];

                    console.log(latitude);
                    console.log(longitude);

                    mapContainer.style.display = 'block';

                    displayMap(latitude, longitude);
                })
                .catch((error) => {
                    if (error.response && error.response.status === 404) {
                        showPopupMessage(`Oops, we couldn't find flight ${tdValue}'s location`)
                    } else {

                        console.error(error);
                    }
                });
        });
    });
}

function showPopupMessage(errorMessage) {
    const popup = document.createElement('div');
    popup.classList.add('not-found-popup');
    popup.textContent = errorMessage;
    document.body.appendChild(popup);

    setTimeout(() => {
        popup.remove();
    }, 1000);
}
let map = null;
function displayMap(latitude, longitude) {
    let mapContainer = document.getElementById("map-container");
    let actualMap = document.getElementById('leaflet-map');

    if (map) {
        map.remove();
    }
    map = L.map(actualMap).setView([latitude, longitude], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    let marker = L.marker([latitude, longitude]).addTo(map);

    let closeBtn = document.getElementsByClassName("close")[0];

    closeBtn.addEventListener('click', () => {
        mapContainer.style.display = 'none'
    })
}
