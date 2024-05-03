// Make sure to replace {hamburg} with the city name and {e3f2e0edcc44fc60818387e918d9f279} with your API key
const cityName = "hamburg";
const apiKey = "e3f2e0edcc44fc60818387e918d9f279";
const apiUrl = `http://api.openweathermap.org/data/2.5/find?q=${cityName}&appid=${apiKey}`;

// Send GET request using fetch API
fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    // Parse JSON response
    const cityId = data.list[0].id;
    if (cityId) {
      console.log("City ID for hamburg:", cityId);
    } else {
      console.log(
        "City ID not found for hamburg. Check your API key or city name."
      );
    }
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
