import { loadAndPopulateTable, filterFlightsTable } from './icaoTable.js';
import { leafletMap } from './flightLocation.js';
import { fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

export async function runFlightTracker() {
  try {
    await loadAndPopulateTable();
    leafletMap();

    const searchInput = document.getElementById('search-input');
    fromEvent(searchInput, 'input')
      .pipe(
        map((event) => event.target.value),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe((searchValue) => {
        filterFlightsTable(searchValue);
      });

  } catch (error) {
    console.error(error);
  }
}