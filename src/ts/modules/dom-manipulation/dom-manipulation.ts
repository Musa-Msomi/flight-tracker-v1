import L from 'leaflet';

export function showLoadingGif(): void {
  const loadingGif = document.getElementById('pikachu-loading-gif') as HTMLElement;
    const th = document.querySelector('#flights th') as HTMLTableCellElement;
  
    loadingGif.classList.remove('hidePikachu');
    th.style.display = 'none';
  }
  
  export function hideLoadingGif(): void {
    const loadingGif = document.getElementById('pikachu-loading-gif') as HTMLElement;
    const th = document.querySelector('#flights th') as HTMLTableCellElement;
  
    loadingGif.classList.add('hidePikachu');
    th.style.display = 'table-cell';
  }
  
  export function populateTable(flightNumbers: string[]): void {
    const tbody = document.getElementById('flights-tbody') as HTMLTableCellElement;
  
    flightNumbers.forEach((icao24) => {
      const row = document.createElement('tr');
      const cell = document.createElement('td');
  
      cell.textContent = icao24;
  
      row.appendChild(cell);
      tbody.appendChild(row);
    });
  }
  
  export function showMapContainer(): void {
    const mapContainer = document.getElementById('map-container') as HTMLElement;
    mapContainer.style.display = 'block';
  }
  
  export function hideMapContainer(): void {
    const mapContainer = document.getElementById('map-container') as HTMLElement;
    mapContainer.style.display = 'none';
  }
  
  let map: L.Map | null = null;
  export function displayMap(latitude: number, longitude: number): void {
    const actualMap = document.getElementById('leaflet-map') as HTMLElement;
  
    if (map) {
      map.remove();
    }
    map = L.map(actualMap).setView([latitude, longitude], 5);
  
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
  
    L.marker([latitude, longitude]).addTo(map);
  }
  
  export function showPopupMessage(errorMessage: string): void {
    const popup = document.createElement('div');
    popup.classList.add('not-found-popup');
    popup.textContent = errorMessage;
  
    document.body.appendChild(popup);
  
    setTimeout(() => {
      popup.remove();
    }, 1000);
  }
  