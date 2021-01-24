// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history

// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe

// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity

// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

// WHEN I open the weather dashboard
// THEN I am presented with the last searched city forecast

var apiKey = "6b8354596eeef05a9add5fcdc34efb38"
var queryURL = "http://maps.openweathermap.org/maps/2.0/weather/appid=" + apiKey

$(".button").click(function(){
    alert("Hello!");

    // Ajax Call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response); // API key hasn't been approved

        // Get date, temp, humidity, wind, and UV index

        // Get 5-day forecast

        // Append search history and the local storage
    })

})