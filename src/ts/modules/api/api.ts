import axios, { AxiosResponse } from "axios";

export async function getFlights(): Promise<any[]> {
  const getFlightsUrl = `https://opensky-network.org/api/states/all`;
  try {
    const response: AxiosResponse<any> = await axios.get(getFlightsUrl);
    return response.data.states;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export function getFlightData(icao24: string): Promise<any> {
  const apiUrl = `https://opensky-network.org/api/tracks/all?icao24=${icao24}&time=0`;
  return axios
    .get(apiUrl)
    .then((response: AxiosResponse<any>) => response.data)
    .catch((error: any) => {
      if (error.response && error.response.status === 404) {
        throw new Error(`Oops, we couldn't find flight ${icao24}'s location`);
      } else if (error.response && error.response.status === 500) {
        throw new Error(
          "Sorry, something went wrong on our side. We're working on fixing it"
        );
      } else {
        console.error(error);
        throw error;
      }
    });
}
