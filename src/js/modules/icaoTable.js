import { getFlights } from "./api/api.js";
import { showLoadingGif, hideLoadingGif, populateTable } from "./dom-manipulation/dom-manipulation.js";

let flightNumbers = [];
export async function loadAndPopulateTable() {
    try {

        showLoadingGif();

        const ongoingFlights = await getFlights();
        flightNumbers = ongoingFlights.map((flight) => flight[0]);

        populateTable(flightNumbers);

        hideLoadingGif();
    } catch (error) {
        console.error(error);
        throw error;
    }

}

export function filterFlightsTable(searchValue) {
    const flightsSearchedFor = flightNumbers.filter((number) =>
        number
            .toLowerCase()
            .includes(searchValue.toLowerCase())
    );

    const flightNumbers = document.querySelectorAll('#flights-tbody tr');

    flightNumbers.forEach((row) => {
        const flightNumber = row.querySelector('td').textContent;
        if (flightsSearchedFor.includes(flightNumber)) {
            row.style.display = 'table-row';
        } else {
            row.style.display = 'none';
        }
    });
}

