var citySearchBtn = $('.searchBtn')
var userCityInput = $('.userInput')

function cityInfo () {
    var userRequest = localStorage.getItem('userInput')
    var geoURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + userRequest + "&limit=5&appid=8d68dd5ea4e78aa35a048f052125b784"
    var weatherURL = "api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=8d68dd5ea4e78aa35a048f052125b784"
    console.log(geoURL);
    console.log(weatherURL);
}

fetch(requestURL)