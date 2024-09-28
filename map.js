// map.js
import { fetchReports } from './api.js.js.js.js';

document.addEventListener('DOMContentLoaded', async () => {
    // Initialize Mapbox/Google Maps
    const map = new Mapbox.Map({
        container: 'map-container',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-74.5, 40],
        zoom: 9
    });

    // Fetch drainage reports from the API
    const reports = await fetchReports();

    // Add markers to the map
    reports.forEach(report => {
        const marker = new mapboxgl.Marker()
            .setLngLat([report.location.lng, report.location.lat])
            .setPopup(new mapboxgl.Popup().setText(report.description))
            .addTo(map);
    });
});
