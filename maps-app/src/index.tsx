import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1IjoiY2phdmF0eCIsImEiOiJjbHJrczl2NXEwaHBwMmt1bzFteHFxejkyIn0.sSEpmpkNvNAKstNUUQMwzg';



if( !navigator.geolocation ) {
  alert("Tu navegador no tiene opción de geolocalización");
  throw new Error("Tu navegador no tiene opción de geolocalización");
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);