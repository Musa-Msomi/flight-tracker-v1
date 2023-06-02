export function showLoadingGif() {
    const loadingGif = document.getElementById('pikachu-loading-gif');
    const th = document.querySelector('#flights th');

    loadingGif.classList.remove('hidePikachu');
    th.style.display = 'none';
}

export function hideLoadingGif() {
    const loadingGif = document.getElementById('pikachu-loading-gif');
    const th = document.querySelector('#flights th');

    loadingGif.classList.add('hidePikachu');
    th.style.display = 'table-cell';
}

export function populateTable(flightNumbers) {
    const tbody = document.getElementById('flights-tbody');

    flightNumbers.forEach((icao24) => {
        const row = document.createElement('tr');
        const cell = document.createElement('td');

        cell.textContent = icao24;

        row.appendChild(cell);
        tbody.appendChild(row);
    });
}


export function showMapContainer() {
    const mapContainer = document.getElementById('map-container');
    mapContainer.style.display = 'block';
}

export function hideMapContainer() {
    const mapContainer = document.getElementById('map-container');
    mapContainer.style.display = 'none';
}
let map = null;
export function displayMap(latitude, longitude) {

    const actualMap = document.getElementById('leaflet-map');

    if (map) {
        map.remove();
    }
    map = L.map(actualMap).setView([latitude, longitude], 5);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    L.marker([latitude, longitude]).addTo(map);
}

export function showPopupMessage(errorMessage) {
    const popup = document.createElement('div');
    popup.classList.add('not-found-popup');
    popup.textContent = errorMessage;

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.remove();
    }, 1000);
}
