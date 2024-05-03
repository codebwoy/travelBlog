//   creating map markers
// Creating map options
var mapOptions = {
  center: [17.438139, 78.39583],
  zoom: 10,
};
// Icon options
var iconOptions = {
  iconUrl: "asset/thumbnail/marker.svg",
  iconSize: [50, 50],
};

// Creating a custom icon
var customIcon = L.icon(iconOptions);

// Creating Marker Options
var markerOptions = {
  title: "MyLocation",
  clickable: true,
  draggable: true,
  icon: customIcon,
};
// Creating a Marker
var marker = L.marker([17.438139, 78.39583], markerOptions);

// Adding popup to the marker
marker.bindPopup("Hi welcome to Tutorialspoint").openPopup();

// Adding marker to the map
marker.addTo(map);

// fetching temperature data for Accra

const apiKey = "e3f2e0edcc44fc60818387e918d9f279"; // Replace with your API key
const cityId = 2306104;

async function fetchWeather() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiKey}&units=metric`
  );
  const data = await response.json();

  displayCurrentWeather(data);
  displayForecast(data);
}

function displayCurrentWeather(data) {
  const currentWeather = data.list[0];
  const iconUrl = `https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`;

  const html = `
        <h2>${data.city.name}</h2>
        <img src="${iconUrl}" alt="Weather Icon">
        <p>Temperature: ${currentWeather.main.temp.toFixed(1)}°C</p>
        <p>Description: ${currentWeather.weather[0].description}</p>
    `;

  document.getElementById("current-weather").innerHTML = html;
}

function displayForecast(data) {
  const forecast = data.list.slice(1, 6); // Get next 5 days data

  const html = forecast
    .map((day) => {
      const iconUrl = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
      const date = new Date(day.dt * 1000).toLocaleDateString();

      return `
            <div class="forecast-card">
                <p>${date}</p>
                <img src="${iconUrl}" alt="Weather Icon">
                <p>Temp: ${day.main.temp.toFixed(1)}°C</p>
            </div>
        `;
    })
    .join("");

  document.getElementById("forecast").innerHTML = html;
}

fetchWeather();












<!-- Map Box API here -->
<!-- <div id="map"></div> -->

<div class="leaflet-pane leaflet-map-pane" style="transform: translate3d(-19px, 0px, 0px);"><div class="leaflet-pane leaflet-tile-pane"></div>
<!-- adding marking on maps -->

<script>
    document.addEventListener("DOMContentLoaded", function () {
        // Initialize the Leaflet map
        var map = L.map('map').setView([0, 0], 2); // Set the initial view to center of the world with zoom level 2
    
        // Add the OpenStreetMap base layer to the map
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    
        // Define a custom marker icon
        var customIcon = L.icon({
            iconUrl: 'html/marker.svg', // Replace 'path/to/your/marker-logo.png' with the path to your custom marker icon image file
            iconSize: [32, 32], // Set the size of your marker icon (width, height)
            iconAnchor: [16, 32], // Set the anchor point of the icon, usually half of the iconSize
            popupAnchor: [0, -32] // Set the popup anchor relative to the icon anchor
        });
    
        // Define an array of locations with their coordinates
        const locations = [
            { name: "Toronto, Canada", coordinates: [43.653908, -79.384293] },
            { name: "Accra, Ghana", coordinates: [5.614818, -0.205874] },
            { name: "Berlin, Germany", coordinates: [52.520008,13.404954] },
            { name: "Jerusalem, Israel", coordinates: [31.771959,35.217018] },
            { name: "Tokyo, Japan", coordinates: [35.652832,139.839478] },
            { name: "Rio de Janeiro, Brazil", coordinates: [-22.908333,-43.196388]}
        ];
      
    
        // Loop through each location and add a marker with custom icon to the map
        locations.forEach(location => {
            L.marker(location.coordinates, { icon: customIcon }).addTo(map).bindPopup(location.name);
        });
    });
    </script>
    



 <script>document.addEventListener("DOMContentLoaded", function () {
    // Initialize the Leaflet map
    var map = L.map('map').setView([0, 0], 2); // Set the initial view to center of the world with zoom level 2

    // Add the OpenStreetMap base layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Define an array of locations with their coordinates
    const locations = [
        { name: "Toronto, Canada", coordinates: [43.65107, -79.347015] },
        { name: "Accra, Ghana", coordinates: [5.6037, -0.187] },
        { name: "Berlin, Germany", coordinates: [52.520008, 13.404954] },
        { name: "Jerusalem, Israel", coordinates: [31.7683, 35.2137] },
        { name: "Tokyo, Japan", coordinates: [35.6895, 139.6917] },
        { name: "Rio de Janeiro, Brazil", coordinates: [-22.9068, -43.1729] }
    ];

    // Loop through each location and add a marker to the map
    locations.forEach(location => {
        L.marker(location.coordinates).addTo(map).bindPopup(location.name);
    });
});
</script> 

 --></div>