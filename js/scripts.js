// Initialize the map
const map = L.map("map").setView([51.505, -0.09], 13);

// Add OpenStreetMap tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Add a marker
// L.marker([51.5, -0.09]).addTo(map)
//     .bindPopup('A sample location!')
//     .openPopup();

// CSS Styles
const style = document.createElement("style");
style.innerHTML = `
    #map {
        height: 400px;
        width: 100%;
    }
`;
document.head.appendChild(style);

document.addEventListener("DOMContentLoaded", function () {
  const travelLocations = [
    {
      name: "Accra, Ghana",
      imgSrc: "asset/ghana.jpeg",
      travelDate: "01/01/2023",
      description: "Explore the vibrant culture and landscapes of Ghana.",
    },
    {
      name: "Toronto, Canada",
      imgSrc: "asset/toronto.jpg",
      travelDate: "15/05/2023",
      description: "Experience the beauty of Canada's natural wonders.",
    },
    {
      name: "Tokyo, Japan",
      imgSrc: "asset/japan.jpeg",
      travelDate: "23/09/2023",
      description: "Discover the rich history and modern wonders of Japan.",
    },
    {
      name: "Sydney, Australia",
      imgSrc: "asset/aussie.jpeg",
      travelDate: "05/12/2023",
      description: "Enjoy the sun, sea, and unique wildlife of Australia.",
    },
    {
      name: "Berlin, Germany",
      imgSrc: "asset/germany.jpeg",
      travelDate: "18/01/2024",
      description: "Experience the culture, history, and beauty of Germany.",
    },
    {
      name: "Jerusalem, Israel",
      imgSrc: "asset/israel.jpeg",
      travelDate: "29/03/2024",
      description: "Explore the historic sites and modern cities of Israel.",
    },
    {
      name: "Rio de Janeiro, Brazil",
      imgSrc: "asset/brazil.jpeg",
      travelDate: "10/04/2024",
      description:
        "Dive into the vibrant culture and natural beauty of Brazil.",
    },
  ];

  const travelCardsContainer = document.getElementById("travel-cards");

  travelLocations.forEach((location) => {
    const cardHtml = `
            <div class="col">
                <div class="card">
                    <img src="${location.imgSrc}" class="card-img-top" alt="${location.name}" />
                    <div class="card-body">
                        <h5 class="card-title">${location.name}</h5>
                        <p class="card-text">Travel Date: ${location.travelDate}</p>
                        <p class="card-text">${location.description}</p>
                    </div>
                </div>
            </div>
        `;

    travelCardsContainer.innerHTML += cardHtml;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const travelLocations = [
    {
      name: "Accra, Ghana",
      imgSrc: "asset/ghana.jpeg",
      travelDate: "01/01/2023",
      description: "Explore the vibrant culture and landscapes of Ghana.",
    },
    {
      name: "Toronto, Canada",
      imgSrc: "asset/toronto.jpeg",
      travelDate: "15/05/2023",
      description: "Experience the beauty of Canada's natural wonders.",
    },
    {
      name: "Tokyo, Japan",
      imgSrc: "asset/japan.jpeg",
      travelDate: "23/09/2023",
      description: "Discover the rich history and modern wonders of Japan.",
    },
    {
      name: "Sydney, Australia",
      imgSrc: "asset/aussie.jpeg",
      travelDate: "05/12/2023",
      description: "Enjoy the sun, sea, and unique wildlife of Australia.",
    },
    {
      name: "Berlin, Germany",
      imgSrc: "asset/germany.jpeg",
      travelDate: "18/01/2024",
      description: "Experience the culture, history, and beauty of Germany.",
    },
    {
      name: "Jerusalem, Israel",
      imgSrc: "asset/israel.jpeg",
      travelDate: "29/03/2024",
      description: "Explore the historic sites and modern cities of Israel.",
    },
    {
      name: "Rio de Janeiro, Brazil",
      imgSrc: "asset/brazil.jpeg",
      travelDate: "10/04/2024",
      description:
        "Dive into the vibrant culture and natural beauty of Brazil.",
    },
  ];

  const travelCardsContainer = document.getElementById("travel-cards");

  travelLocations.forEach((location) => {
    const cardHtml = `
            <div class="col-md-4">
                <div class="card mb-4">
                    <img src="${location.imgSrc}" class="card-img-top" alt="${location.name}" />
                    <div class="card-body">
                        <h5 class="card-title">${location.name}</h5>
                        <p class="card-text">Travel Date: ${location.travelDate}</p>
                        <p class="card-text">${location.description}</p>
                    </div>
                </div>
            </div>
        `;

    travelCardsContainer.innerHTML += cardHtml;
  });
});

// new location

document
  .getElementById("contact_form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form values
    let firstName = document.getElementById("first_name").value;
    let lastName = document.getElementById("last_name").value;
    let email = document.getElementById("email_addr").value;
    let phone = document.getElementById("phone_input").value;
    let message = document.getElementById("message").value;

    // Create message to display in alert
    const alertMessage =
      "First Name: " +
      firstName +
      "\n" +
      "Last Name: " +
      lastName +
      "\n" +
      "Email: " +
      email +
      "\n" +
      "Phone: " +
      phone +
      "\n" +
      "Message: " +
      message;

    // Display the message in a window alert
    window.alert(`simon der Globetrotter says thank you: ${alertMessage}`);
  });

document.addEventListener("DOMContentLoaded", function () {
  // Initialize the Leaflet map
  var map = L.map("map").setView([0, 0], 2); // Set the initial view to center of the world with zoom level 2

  // Add the OpenStreetMap base layer to the map
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Define a custom marker icon
  var customIcon = L.icon({
    iconUrl: "asset/thumbnail/marker.svg", // Replace 'path/to/your/marker-logo.png' with the path to your custom marker icon image file
    iconSize: [32, 32], // Set the size of your marker icon (width, height)
    iconAnchor: [16, 32], // Set the anchor point of the icon, usually half of the iconSize
    popupAnchor: [0, -32], // Set the popup anchor relative to the icon anchor
  });

  // Define an array of locations with their coordinates
  const locations = [
    { name: "Toronto, Canada", coordinates: [43.653908, -79.384293] },
    { name: "Accra, Ghana", coordinates: [5.614818, -0.205874] },
    { name: "Berlin, Germany", coordinates: [52.520008, 13.404954] },
    { name: "Jerusalem, Israel", coordinates: [31.771959, 35.217018] },
    { name: "Tokyo, Japan", coordinates: [35.652832, 139.839478] },
    { name: "Rio de Janeiro, Brazil", coordinates: [-22.908333, -43.196388] },
  ];

  // Loop through each location and add a marker with custom icon to the map
  locations.forEach((location) => {
    L.marker(location.coordinates, { icon: customIcon })
      .addTo(map)
      .bindPopup(location.name);
  });
});
