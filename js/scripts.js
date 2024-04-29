
// Initialize the map
const map = L.map('map').setView([51.505, -0.09], 13);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker
// L.marker([51.5, -0.09]).addTo(map)
//     .bindPopup('A sample location!')
//     .openPopup();

// CSS Styles
const style = document.createElement('style');
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
            description: "Explore the vibrant culture and landscapes of Ghana."
         },
         {
            name: "Toronto, Canada",
            imgSrc: "asset/toronto.jpg",
            travelDate: "15/05/2023",
            description: "Experience the beauty of Canada's natural wonders."
        },
        {
            name: "Tokyo, Japan",
            imgSrc: "asset/japan.jpeg",
            travelDate: "23/09/2023",
            description: "Discover the rich history and modern wonders of Japan."
        },
        {
            name: "Sydney, Australia",
            imgSrc: "asset/aussie.jpeg",
            travelDate: "05/12/2023",
            description: "Enjoy the sun, sea, and unique wildlife of Australia."
        },
        {
            name: "Berlin, Germany",
            imgSrc: "asset/germany.jpeg",
            travelDate: "18/01/2024",
            description: "Experience the culture, history, and beauty of Germany."
        },
        {
            name: "Jerusalem, Israel",
            imgSrc: "asset/israel.jpeg",
            travelDate: "29/03/2024",
            description: "Explore the historic sites and modern cities of Israel."
        },
        {
            name: "Rio de Janeiro, Brazil",
            imgSrc: "asset/brazil.jpeg",
            travelDate: "10/04/2024",
            description: "Dive into the vibrant culture and natural beauty of Brazil."
        }
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







// javascript to generate photos
// Array of thumbnail image paths
// let thumbnailPaths = [
//     "/asset/aussie.jpeg",
//     "/asset/toronto.jpeg",
//     "/asset/japan.jpeg",
//     "/asset/israel.jpeg",
//     "/asset/ghana.jpeg",
//     "/asset/germany.jpeg",
//     "/asset/brazil.jpeg",
//     // Add more paths as needed
// ];

// // Function to generate thumbnail photos
// function generateThumbnails() {
//     // Get the container element for thumbnails
//     let container = document.querySelector('#travel-cards');

//     // Loop through the array of thumbnail paths
//     thumbnailPaths.forEach(function(path) {
//         // Create an <img> element
//         let imgElement = document.createElement('img');
        
//         // Set the src attribute to the path of the thumbnail image
//         imgElement.src = path;
        
//         // Add Bootstrap classes to make the images responsive
//         imgElement.classList.add('img-fluid', 'rounded');
        
//         // Create a <div> element to contain each thumbnail
//         let divElement = document.createElement('div');
//         divElement.classList.add('col');
        
//         // Append the <img> element to the <div> element
//         divElement.appendChild(imgElement);
        
//         // Append the <div> element to the container
//         container.appendChild(divElement);
//     });
// }

// // Call the function to generate thumbnails when the page loads
// window.onload = generateThumbnails;







// new javaScript file

// document.addEventListener("DOMContentLoaded", function () {
//     // Define destinations array with links
//     const destinations = [
//         { name: "Africa", link: "/html/africa.html" },
//         { name: "Americas", link: "/html/americas.html" },
//         { name: "Asia", link: "/html/asia.html" },
//         { name: "Caribbean", link: "/africa/caribbean.html" },
//         { name: "Europe", link: "/html/europe.html" },
//         { name: "Middle East", link: "/html/middle.html" },
//         { name: "Oceania", link: "/html/oceania.html" }
//     ];

//     // Populate dropdown menu with destinations
//     const dropdownMenu = document.getElementById("destinationMenu");
//     destinations.forEach(destination => {
//         const listItem = document.createElement("li");
//         listItem.innerHTML = `<a class="dropdown-item" href="${destination.link}" target="_self">${destination.name}</a>`;
//         dropdownMenu.appendChild(listItem);
//     });
// });



document.addEventListener("DOMContentLoaded", function () {
    const travelLocations = [
        {
            name: "Accra, Ghana",
            imgSrc: "asset/ghana.jpeg",
            travelDate: "01/01/2023",
            description: "Explore the vibrant culture and landscapes of Ghana."
        },
        {
            name: "Toronto, Canada",
            imgSrc: "asset/toronto.jpeg",
            travelDate: "15/05/2023",
            description: "Experience the beauty of Canada's natural wonders."
        },
        {
            name: "Tokyo, Japan",
            imgSrc: "asset/japan.jpeg",
            travelDate: "23/09/2023",
            description: "Discover the rich history and modern wonders of Japan."
        },
        {
            name: "Sydney, Australia",
            imgSrc: "asset/aussie.jpeg",
            travelDate: "05/12/2023",
            description: "Enjoy the sun, sea, and unique wildlife of Australia."
        },
        {
            name: "Berlin, Germany",
            imgSrc: "asset/germany.jpeg",
            travelDate: "18/01/2024",
            description: "Experience the culture, history, and beauty of Germany."
        },
        {
            name: "Jerusalem, Israel",
            imgSrc: "asset/israel.jpeg",
            travelDate: "29/03/2024",
            description: "Explore the historic sites and modern cities of Israel."
        },
        {
            name: "Rio de Janeiro, Brazil",
            imgSrc: "asset/brazil.jpeg",
            travelDate: "10/04/2024",
            description: "Dive into the vibrant culture and natural beauty of Brazil."
        }
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




