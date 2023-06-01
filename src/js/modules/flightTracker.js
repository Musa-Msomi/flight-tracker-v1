import { loadAndPopulateTable } from './icaoTable.js';
import { myMap } from './flightLocation.js';

export async function runFlightTracker() {
  try {
    await loadAndPopulateTable();
    myMap();
  } catch (error) {
    console.error(error);
  }
}