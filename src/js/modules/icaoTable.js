import { getFlights } from "./api/api.js";
import { showLoadingGif, hideLoadingGif, populateTable } from "./dom-manipulation/dom-manipulation.js";


export async function loadAndPopulateTable() {
    try {

        showLoadingGif();

        const ongoingFlights = await getFlights();
        const flightNumbers = ongoingFlights.map((flight) => flight[0]);

        populateTable(flightNumbers);

        hideLoadingGif();
    } catch (error) {
        console.error(error);
        throw error;
    }

}
