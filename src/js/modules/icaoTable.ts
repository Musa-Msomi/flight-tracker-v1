import { getFlights } from './api/api';
import { showLoadingGif, hideLoadingGif, populateTable } from './dom-manipulation/dom-manipulation';

let flightNumbers: string[] = [];

export async function loadAndPopulateTable(): Promise<void> {
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

export function filterFlightsTable(searchValue: string): void {
  const flightsSearchedFor = flightNumbers.filter((number) =>
    number.toLowerCase().includes(searchValue.toLowerCase())
  );

  const flightRows = document.querySelectorAll<HTMLTableRowElement>('#flights-tbody tr');

  flightRows.forEach((row) => {
    const flightNumber = row.querySelector('td')?.textContent;
    if (flightNumber && flightsSearchedFor.includes(flightNumber)) {
      row.style.display = 'table-row';
    } else {
      row.style.display = 'none';
    }
  });
}
