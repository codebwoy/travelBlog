<div id="map"></div>

<script>
    // Initialize the map
    var map = L.map('map');

    // Add the OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Get user's geolocation and center the map
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var userLatLng = [position.coords.latitude, position.coords.longitude];
            map.setView(userLatLng, 13);
            L.marker(userLatLng).addTo(map);
        });
    } else {
        // Fallback if geolocation is not supported
        map.setView([51.5, -0.09], 13);
        L.marker([51.5, -0.09]).addTo(map);




        @import url("https://unpkg.com/leaflet@1.9.4/dist/leaflet.css");
 /* Bootstrap CSS  */
 @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css');

@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet');
 





// mapping codes


/* passing marker on map */
var map = L.map('map').setView([51.5, -0.09], 13);

// Add the OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker to the map
var marker = L.marker([51.5, -0.09]).addTo(map); */



/* trying this code exams */

<div id="map"></div>

<script>
// Initialize the map
var map = L.map('map');

// Add the OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Get user's geolocation and center the map
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var userLatLng = [position.coords.latitude, position.coords.longitude];
        map.setView(userLatLng, 13);
        L.marker(userLatLng).addTo(map);
    });
} else {
    // Fallback if geolocation is not supported
    map.setView([51.5, -0.09], 13);
    L.marker([51.5, -0.09]).addTo(map);








    /* passing marker on map */
 var map = L.map('map').setView([51.5, -0.09], 13);

 // Add the OpenStreetMap tile layer
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
 }).addTo(map);

 // Add a marker to the map
 var marker = L.marker([51.5, -0.09]).addTo(map); */