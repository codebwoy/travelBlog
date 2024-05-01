// const temperature = document.getElementById("temperature");

// async function currentWeather() {
//   const data = await fetch(
//     `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat={lat}&lon={lon}&appid={API key}`
//   ).then((response) => {
//     response.json().then(function (data) {
//       console.log(data);
//       temperature.innerText = `Temperature: ${data.weather[0].description} °C`;
//     });
//   });
// }
// currentWeather();



// const apiKey = "e3f2e0edcc44fc60818387e918d9f279"; // my_api_key_here" 

// async function fetchWeatherForecast(5.603717, -0.186964) {
//   const response = await fetch(
//     `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly&appid=${apiKey}`
//   );
//   const data = await response.json();

//   // Extract forecast data for the next 5 days
//   const forecastData = data.daily.slice(1, 6); // Exclude today's forecast

//   return forecastData;
// }

// Example usage:
// const accraLatitude = 5.603717;
// const accraLongitude = -0.186964;

// fetchWeatherForecast(accraLatitude, accraLongitude)
//   .then((forecastData) => {
//     console.log("Weather forecast for the next 5 days:");
//     console.log(forecastData);
//   })
//   .catch((error) => {
//     console.error("Error fetching weather forecast:", error);
//   });







//   creating map markers
// Creating map options
var mapOptions = {
    center: [17.438139, 78.395830],
    zoom: 10
}
 // Icon options
 var iconOptions = {
    iconUrl: 'asset/thumbnail/marker.svg',
    iconSize: [50, 50]
 }

 // Creating a custom icon
 var customIcon = L.icon(iconOptions);
         
 // Creating Marker Options
 var markerOptions = {
    title: "MyLocation",
    clickable: true,
    draggable: true,
    icon: customIcon
 }
 // Creating a Marker
 var marker = L.marker([17.438139, 78.395830], markerOptions);
         
 // Adding popup to the marker
 marker.bindPopup('Hi welcome to Tutorialspoint').openPopup();
 
 // Adding marker to the map
 marker.addTo(map);



// fetching temperature data for Accra

// const apiKey = 'e3f2e0edcc44fc60818387e918d9f279'; // Replace with your API key
// const cityId = 2911298;

// async function fetchWeather() {
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiKey}&units=metric`);
//     const data = await response.json();

//     displayCurrentWeather(data);
//     displayForecast(data);
// }

// function displayCurrentWeather(data) {
//     const currentWeather = data.list[0];
//     const iconUrl = `https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`;

//     const html = `
//         <h2>${data.city.name}</h2>
//         <img src="${iconUrl}" alt="Weather Icon">
//         <p>Temperature: ${currentWeather.main.temp.toFixed(1)}°C</p>
//         <p>Description: ${currentWeather.weather[0].description}</p>
//     `;

//     document.getElementById('current-weather').innerHTML = html;
// }

// function displayForecast(data) {
//     const forecast = data.list.slice(1, 6); // Get next 5 days data

//     const html = forecast.map(day => {
//         const iconUrl = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
//         const date = new Date(day.dt * 1000).toLocaleDateString();

//         return `
//             <div class="forecast-card">
//                 <p>${date}</p>
//                 <img src="${iconUrl}" alt="Weather Icon">
//                 <p>Temp: ${day.main.temp.toFixed(1)}°C</p>
//             </div>
//         `;
//     }).join('');

//     document.getElementById('forecast').innerHTML = html;
// }

// fetchWeather();



// fetching temperature data for Accra

const apiKey = 'e3f2e0edcc44fc60818387e918d9f279'; // Replace with your API key
const cityId = 2306104;

async function fetchWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiKey}&units=metric`);
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

    document.getElementById('current-weather').innerHTML = html;
}

function displayForecast(data) {
    const forecast = data.list.slice(1, 6); // Get next 5 days data

    const html = forecast.map(day => {
        const iconUrl = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
        const date = new Date(day.dt * 1000).toLocaleDateString();

        return `
            <div class="forecast-card">
                <p>${date}</p>
                <img src="${iconUrl}" alt="Weather Icon">
                <p>Temp: ${day.main.temp.toFixed(1)}°C</p>
            </div>
        `;
    }).join('');

    document.getElementById('forecast').innerHTML = html;
}

fetchWeather();





