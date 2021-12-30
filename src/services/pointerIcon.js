// import marker from 'https://unpkg.com/leaflet@1.0.3/dist/images/marker-icon-2x.png'
import L from "leaflet";
import redFilledMarker from "../images/icons/red-filled-marker.svg";

export const redMarker = L.icon({
  iconUrl: redFilledMarker,
  iconSize: [40, 44],
  iconAnchor: [20, 40],
  popupAnchor: [0, -38],
  shadowSize: [68, 95],
  shadowAnchor: [20, 92],
});


