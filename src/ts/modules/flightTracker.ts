import { loadAndPopulateTable, filterFlightsTable } from './icaoTable';
import { leafletMap } from './flightLocation';
import { fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

export async function runFlightTracker(): Promise<void> {
  try {
    await loadAndPopulateTable();
    leafletMap();

    const searchInput = document.getElementById('search-input') as HTMLInputElement;
    fromEvent(searchInput, 'input')
      .pipe(
        map((event: Event) => (event.target as HTMLInputElement)?.value),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe((searchValue: string) => {
        filterFlightsTable(searchValue);
      });

  } catch (error) {
    console.error(error);
  }
}
