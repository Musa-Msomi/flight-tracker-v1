import axios from 'axios';

export async function populateTable() {
    const begin = 1517227200;
    const end = 1517230800;
    const getFlightsUrl = `https://opensky-network.org/api/flights/all?begin=${begin}&end=${end}`;
    const loadingGif = document.getElementById('pikachu-loading-gif');
    const tbody = document.getElementById('flights-tbody');
    const th = document.querySelector('#flights th');

    loadingGif.classList.remove('hidePikachu');
    th.style.display = 'none';

    try {
        const response = await axios.get(getFlightsUrl);
        const flights = response.data;
        const flightNumbers = flights.map((flight) => flight.icao24);

        flightNumbers.forEach((icao24) => {
            const row = document.createElement('tr');
            const cell = document.createElement('td');

            cell.textContent = icao24;

            row.appendChild(cell);
            tbody.appendChild(row);
        });

        loadingGif.classList.add('hidePikachu');
        th.style.display = 'table-cell';

    } catch (error) {
        console.error(error);
        throw error;
    }
}
