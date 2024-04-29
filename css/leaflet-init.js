// Initialize the map
var map = L.map('map').setView([51.505, -0.09], 13);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker
L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A sample location!')
    .openPopup();


    document.addEventListener("DOMContentLoaded", function() {
        const travelLocations = [
            {
                name: "Ghana",
                imgSrc: "/asset/ghana-thumbnail.jpg",
                travelDate: "01/05/2024",
                description: "Explore the vibrant culture and landscapes of Ghana."
            },
            {
                name: "Canada",
                imgSrc: "/asset/canada-thumbnail.jpg",
                travelDate: "15/06/2024",
                description: "Experience the beauty of Canada's natural wonders."
            },
            {
                name: "Japan",
                imgSrc: "/asset/japan-thumbnail.jpg",
                travelDate: "23/07/2024",
                description: "Discover the rich history and modern wonders of Japan."
            },
            {
                name: "Australia",
                imgSrc: "/asset/australia-thumbnail.jpg",
                travelDate: "05/09/2024",
                description: "Enjoy the sun, sea, and unique wildlife of Australia."
            },
            {
                name: "Germany",
                imgSrc: "/asset/germany-thumbnail.jpg",
                travelDate: "18/10/2024",
                description: "Experience the culture, history, and beauty of Germany."
            },
            {
                name: "Israel",
                imgSrc: "/asset/israel-thumbnail.jpg",
                travelDate: "29/11/2024",
                description: "Explore the historic sites and modern cities of Israel."
            },
            {
                name: "Brazil",
                imgSrc: "/asset/brazil-thumbnail.jpg",
                travelDate: "10/12/2024",
                description: "Dive into the vibrant culture and natural beauty of Brazil."
            }
        ];
    
        const travelCardsContainer = document.getElementById("travel-cards");
    
        travelLocations.forEach(location => {
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
    
