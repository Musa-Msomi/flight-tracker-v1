import { getFlightData } from './api/api';
import {
  showMapContainer,
  hideMapContainer,
  displayMap,
  showPopupMessage,
} from './dom-manipulation/dom-manipulation';

export function leafletMap(): void {
  const tdElements = document.querySelectorAll<HTMLTableCellElement>('#flights-tbody td');
  let latitude: number | null = null;
  let longitude: number | null = null;

  tdElements.forEach((td) => {
    td.addEventListener('click', async () => {
      const tdValue: string | null = td.textContent;

      try {
        if (tdValue !== null) {
          const apiResponse = await getFlightData(tdValue);
          const lastPathObjectInPathArray = apiResponse.path[apiResponse.path.length - 1];
          latitude = lastPathObjectInPathArray[1];
          longitude = lastPathObjectInPathArray[2];

          if (latitude !== null && longitude !== null) {
            showMapContainer();
            displayMap(latitude, longitude);
          }
        }
      } catch (error:any) {
        showPopupMessage(error.message);
      }
    });
  });
}

function handleCloseButtonClick(): void {
  hideMapContainer();
}

const closeBtn = document.getElementsByClassName('close')[0] as HTMLButtonElement;
closeBtn.addEventListener('click', handleCloseButtonClick);
