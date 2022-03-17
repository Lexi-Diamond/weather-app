var citySearchBtn = $('.searchBtn')
var userCityInput = $('.userInput')
var searchedCities = []
var geoURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + userCityInput + "&limit=5&appid=8d68dd5ea4e78aa35a048f052125b784"
var savedCitiesButtons = $('.savedCitiesButtons')
var lat
var lon
//create function that handles search user input click event
citySearchBtn.on("click", function (event) {
    event.preventDefault();
    console.log(userCityInput.val());
    var saveCityInput = userCityInput.val()
    searchedCities.push(saveCityInput)
    makeBtn ();
    //set item to local storage 
    localStorage.setItem('userInput',searchedCities)
    fetchWeather();
    
})
function makeBtn () {
  console.log(localStorage.getItem('userInput'))
  var searchedCitiesArr = localStorage.getItem('userInput').split(',')
  for(let i = 0; i < searchedCitiesArr.length; i++) {
    $(savedCitiesButtons).append(`<button class="">${searchedCitiesArr[i]}</button>`);
  }
}    

function fetchWeather (){
var geoURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + userCityInput.val() + "&limit=5&appid=8d68dd5ea4e78aa35a048f052125b784"
console.log(geoURL)
    fetch(geoURL)
    .then(function (response) {
        if (response.status === 404) {
          console.log(response)
        } else {
          return response.json();
        }
      
      })
      .then(function (data) {
        console.log(data)
        lat = data[0].lat;
        lon = data[0].lon;

      $('.cityName').text(data[0].name) 

        
  
        console.log(geoURL)
        var weatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat +"&lon=" + lon + "&units=imperial&exclude=minutely,hourly&appid=8d68dd5ea4e78aa35a048f052125b784"
        fetch(weatherURL)
        .then(function (response) {
            if (response.status === 404) {
            console.log(response)
            } else {
            return response.json()
            } 
        })
        .then(function (data) {
            console.log(data);

            var currentWeather = $('.currentWeather');
            currentWeather.empty()
            var currentWeatherIcon = $("<img>").attr("src", `http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`)
            var currentTemp = $("<li>")
            .text(
              "Temp: " + data.current.temp)
            var currentWindSpeed = $("<li>")
            .text(
              "Wind: " + data.current.wind_speed)
            var currentHumidity = $("<li>")
            .text(
              "Humidity: " + data.current.humidity)

              currentWeather.append(currentWeatherIcon).append(currentTemp).append(currentWindSpeed).append(currentHumidity)
            

              var dailyWeather = $('.dailyWeather');
              var dailyWeatherIcon = $("<img>").attr("src", `http://openweathermap.org/img/wn/${data.daily[0].weather[0].icon}@2x.png`)
              var dailyTemp = $("<li>")
              .text(
              "Temp: " + data.daily[0].temp.day)
              var dailyWind = $("<li>")
              .text(
                "Wind: " + data.daily[0].wind_speed)
              var dailyHumidity = $("<li>")
              .text(
                "Humidity: " + data.daily[0].humidity)
              
                dailyWeather.append(dailyWeatherIcon).append(dailyTemp).append(dailyWind).append(dailyHumidity)
                
              var dailyWeather1 = $('.dailyWeather1')
              var dailyWeatherIcon1 = $("<img>").attr("src", `http://openweathermap.org/img/wn/${data.daily[1].weather[0].icon}@2x.png`)
              var dailyTemp1 = $("<li>")
              .text(
              "Temp: " + data.daily[1].temp.day)
              var dailyWind1 = $("<li>")
              .text(
                "Wind: " + data.daily[1].wind_speed)
              var dailyHumidity1 = $("<li>")
              .text(
                "Humidity: " + data.daily[1].humidity)
              
                dailyWeather1.append(dailyWeatherIcon1).append(dailyTemp1).append(dailyWind1).append(dailyHumidity1)

              var dailyWeather2 = $('.dailyWeather2')
              var dailyWeatherIcon2 = $("<img>").attr("src", `http://openweathermap.org/img/wn/${data.daily[2].weather[0].icon}@2x.png`)
              var dailyTemp2 = $("<li>")
              .text(
              "Temp: " + data.daily[2].temp.day)
              var dailyWind2 = $("<li>")
              .text(
                "Wind: " + data.daily[2].wind_speed)
              var dailyHumidity2 = $("<li>")
              .text(
                "Humidity: " + data.daily[2].humidity)
              
                dailyWeather2.append(dailyWeatherIcon2).append(dailyTemp2).append(dailyWind2).append(dailyHumidity2)

                var dailyWeather3 = $('.dailyWeather3')
                var dailyWeatherIcon3 = $("<img>").attr("src", `http://openweathermap.org/img/wn/${data.daily[3].weather[0].icon}@2x.png`)
                var dailyTemp3 = $("<li>")
                .text(
                "Temp: " + data.daily[3].temp.day)
                var dailyWind3 = $("<li>")
                .text(
                  "Wind: " + data.daily[3].wind_speed)
                var dailyHumidity3 = $("<li>")
                .text(
                  "Humidity: " + data.daily[3].humidity)
                
                  dailyWeather3.append(dailyWeatherIcon3).append(dailyTemp3).append(dailyWind3).append(dailyHumidity3)
                  
                  var dailyWeather4 = $('.dailyWeather4')
                  var dailyWeatherIcon4 = $("<img>").attr("src", `http://openweathermap.org/img/wn/${data.daily[4].weather[0].icon}@2x.png`)
                  var dailyTemp4 = $("<li>")
                  .text(
                  "Temp: " + data.daily[4].temp.day)
                  var dailyWind4 = $("<li>")
                  .text(
                    "Wind: " + data.daily[4].wind_speed)
                  var dailyHumidity4 = $("<li>")
                  .text(
                    "Humidity: " + data.daily[4].humidity)
                  
                    dailyWeather4.append(dailyWeatherIcon4).append(dailyTemp4).append(dailyWind4).append(dailyHumidity4)
      })
      })
    


    }
