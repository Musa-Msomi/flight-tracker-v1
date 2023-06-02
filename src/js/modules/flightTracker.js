import { loadAndPopulateTable } from './icaoTable.js';
import { leafletMap } from './flightLocation.js';

export async function runFlightTracker() {
  try {
    await loadAndPopulateTable();
    leafletMap();
  } catch (error) {
    console.error(error);
  }
}