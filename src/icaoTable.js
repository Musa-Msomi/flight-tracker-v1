import axios from 'axios'

export function populateTable() {
    let begin = 1517227200;
    let end = 1517230800;
    const getFlightsUrl = `https://opensky-network.org/api/flights/all?begin=${begin}&end=${end}`;
    const loadingGif = document.getElementById('pikachu-loading-gif');
    const tbody = document.getElementById('flights-tbody');
    const th = document.querySelector('#flights th');

    loadingGif.classList.remove('hidePikachu');

    th.style.display = 'none';

    console.log(getFlightsUrl);
    axios
        .get(getFlightsUrl)
        .then((response) => {
            const flights = response.data;
            const flightNumbers = flights.map((flight) => flight.icao24);

            flightNumbers.forEach((icao24) => {
                const row = document.createElement('tr');
                const cell = document.createElement('td');
                cell.textContent = icao24;
                row.appendChild(cell);
                tbody.appendChild(row);
            });
            loadingGif.classList.add('hidePikachu')

            th.style.display = 'table-cell';
        })
        .catch(function (error) {
            console.error("Error: ", error);
        })




}