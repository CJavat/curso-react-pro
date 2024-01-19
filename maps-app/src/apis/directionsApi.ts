import axios from "axios";

const directionsApi = axios.create({
  baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
  params: {
    alternatives: false,
    geometries: "geojson",
    overview: "simplified",
    language: "es",
    steps: false,
    access_token: "pk.eyJ1IjoiY2phdmF0eCIsImEiOiJjbHJrczl2NXEwaHBwMmt1bzFteHFxejkyIn0.sSEpmpkNvNAKstNUUQMwzg"
  }
});

export default directionsApi;