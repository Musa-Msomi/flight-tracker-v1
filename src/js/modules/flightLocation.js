import { getFlightData } from './api/api.js';
import { showMapContainer, hideMapContainer, displayMap, showPopupMessage } from './dom-manipulation/dom-manipulation.js';

export function myMap() {
    const tdElements = document.querySelectorAll('#flights-tbody td');
    let latitude = null;
    let longitude = null;

    tdElements.forEach((td) => {
        td.addEventListener('click', async () => {
            const tdValue = td.textContent;

            try {
                const apiResponse = await getFlightData(tdValue);
                const lastPathObjectInPathArray = apiResponse.path[apiResponse.path.length - 1];
                latitude = lastPathObjectInPathArray[1];
                longitude = lastPathObjectInPathArray[2];

                showMapContainer();
                displayMap(latitude, longitude);
            } catch (error) {
                showPopupMessage(error.message);
            }
        });
    });
}

function handleCloseButtonClick() {
    hideMapContainer();
}

const closeBtn = document.getElementsByClassName('close')[0];
closeBtn.addEventListener('click', handleCloseButtonClick);
