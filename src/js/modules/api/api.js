import axios from 'axios';

export async function getFlights() {
    const getFlightsUrl = `https://opensky-network.org/api/states/all`;
    try {
        const response = await axios.get(getFlightsUrl);
        return response.data.states;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export function getFlightData(icao24) {
    const apiUrl = `https://opensky-network.org/api/tracks/all?icao24=${icao24}&time=0`;
    return axios.get(apiUrl)
      .then((response) => response.data)
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          throw new Error(`Oops, we couldn't find flight ${icao24}'s location`);
        } else {
          console.error(error);
          throw error;
        }
      });
  }
