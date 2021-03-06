var citySearchBtn = $(".searchBtn");
var userCityInput = $(".userInput");
var searchedCities = [];
var geoURL =
  "http://api.openweathermap.org/geo/1.0/direct?q=" +
  userCityInput +
  "&limit=5&appid=8d68dd5ea4e78aa35a048f052125b784";
var savedCitiesButtons = $(".savedCitiesButtons");
var lat;
var lon;
//on page load the saved buttons in local storage appear
//on click of search button a new button for current search is generated 
makeBtn()
//create function that handles search user input click event
citySearchBtn.on("click", function (event) {
  event.preventDefault();
  getLocalStorage();
  console.log(userCityInput.val());
  var saveCityInput = userCityInput.val();
  //joining searchedCities array and the stored userInputs
  searchedCities.push(saveCityInput);
  localStorage.setItem("userInput", JSON.stringify(searchedCities));
  makeBtn();
  //set item to local storage
  fetchWeather();
});
function makeBtn() {
  savedCitiesButtons.empty();
  getLocalStorage();
  for (let i = 0; i < searchedCities.length; i++) {
    $(savedCitiesButtons).append(
      `<button class="">${searchedCities[i]}</button>`
    );
  }
}
function getLocalStorage() {
  searchedCities = JSON.parse(localStorage.getItem("userInput"));
  if(!searchedCities) searchedCities = []
}

function fetchWeather() {
  var geoURL =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    userCityInput.val() +
    "&limit=5&appid=8d68dd5ea4e78aa35a048f052125b784";
  console.log(geoURL);
  fetch(geoURL)
    .then(function (response) {
      if (response.status === 404) {
        console.log(response);
      } else {
        return response.json();
      }
    })
    .then(function (data) {
      console.log(data);
      lat = data[0].lat;
      lon = data[0].lon;

      $(".cityName").text(data[0].name);

      console.log(geoURL);
      var weatherURL =
        "https://api.openweathermap.org/data/2.5/onecall?lat=" +
        lat +
        "&lon=" +
        lon +
        "&units=imperial&exclude=minutely,hourly&appid=8d68dd5ea4e78aa35a048f052125b784";
      fetch(weatherURL)
        .then(function (response) {
          if (response.status === 404) {
            console.log(response);
          } else {
            return response.json();
          }
        })
        .then(function (data) {
          console.log(data);

          var currentWeather = $(".currentWeather");
          currentWeather.empty();
          var unixDate = (data.current.dt)
          var date = new Date(unixDate*1000);
          var currentDate = new Date(date).toLocaleDateString("en-US")
          console.log(currentDate)
          $("<li>").text(currentDate);
          var currentWeatherIcon = $("<img>").attr(
            "src",
            `http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`
          );
          var currentTemp = $("<li>").text("Temp: " + data.current.temp);
          var currentWindSpeed = $("<li>").text(
            "Wind: " + data.current.wind_speed
          );
          var currentHumidity = $("<li>").text(
            "Humidity: " + data.current.humidity
          );

          currentWeather
            .append(currentDate)  
            .append(currentWeatherIcon)
            .append(currentTemp)
            .append(currentWindSpeed)
            .append(currentHumidity);

          var dailyWeather = $(".dailyWeather"); 
          var dailyunixDate = (data.daily[1].dt)
          var dailydate = new Date(dailyunixDate*1000);
          var dailyDate = new Date(dailydate).toLocaleDateString("en-US")
          console.log(dailyDate)
          $("<li>").text(dailyDate)
          var dailyWeatherIcon = $("<img>").attr(
            "src",
            `http://openweathermap.org/img/wn/${data.daily[1].weather[0].icon}@2x.png`
          );
          var dailyTemp = $("<li>").text("Temp: " + data.daily[1].temp.day);
          var dailyWind = $("<li>").text("Wind: " + data.daily[1].wind_speed);
          var dailyHumidity = $("<li>").text("Humidity: " + data.daily[1].humidity);

          dailyWeather
            .append(dailyDate)
            .append(dailyWeatherIcon)
            .append(dailyTemp)
            .append(dailyWind)
            .append(dailyHumidity);


            var dailyWeather1 = $(".dailyWeather"); 
            var dailyunixDate1 = (data.daily[2].dt)
            var dailydate1 = new Date(dailyunixDate1*1000);
            var dailyDate1 = new Date(dailydate1).toLocaleDateString("en-US")
            console.log(dailyDate1)
            $("<li>").text(dailyDate1)
          var dailyWeather1 = $(".dailyWeather1");
          var dailyWeatherIcon1 = $("<img>").attr(
            "src",
            `http://openweathermap.org/img/wn/${data.daily[1].weather[0].icon}@2x.png`
          );
          var dailyTemp1 = $("<li>").text("Temp: " + data.daily[1].temp.day);
          var dailyWind1 = $("<li>").text("Wind: " + data.daily[1].wind_speed);
          var dailyHumidity1 = $("<li>").text(
            "Humidity: " + data.daily[1].humidity
          );

          dailyWeather1
            .append(dailyDate1)
            .append(dailyWeatherIcon1)
            .append(dailyTemp1)
            .append(dailyWind1)
            .append(dailyHumidity1);

          var dailyWeather2 = $(".dailyWeather"); 
          var dailyunixDate2 = (data.daily[3].dt)
          var dailydate2 = new Date(dailyunixDate2*1000);
          var dailyDate2 = new Date(dailydate2).toLocaleDateString("en-US")
          console.log(dailyDate2)
          $("<li>").text(dailyDate2)
          var dailyWeather2 = $(".dailyWeather2");
          var dailyWeatherIcon2 = $("<img>").attr(
            "src",
            `http://openweathermap.org/img/wn/${data.daily[2].weather[0].icon}@2x.png`
          );
          var dailyTemp2 = $("<li>").text("Temp: " + data.daily[2].temp.day);
          var dailyWind2 = $("<li>").text("Wind: " + data.daily[2].wind_speed);
          var dailyHumidity2 = $("<li>").text(
            "Humidity: " + data.daily[2].humidity
          );

          dailyWeather2
            .append(dailyDate2)
            .append(dailyWeatherIcon2)
            .append(dailyTemp2)
            .append(dailyWind2)
            .append(dailyHumidity2);

          var dailyWeather3 = $(".dailyWeather"); 
          var dailyunixDate3 = (data.daily[4].dt)
          var dailydate3 = new Date(dailyunixDate3*1000);
          var dailyDate3 = new Date(dailydate3).toLocaleDateString("en-US")
          console.log(dailyDate3)
          $("<li>").text(dailyDate3)
          var dailyWeather3 = $(".dailyWeather3");
          var dailyWeatherIcon3 = $("<img>").attr(
            "src",
            `http://openweathermap.org/img/wn/${data.daily[3].weather[0].icon}@2x.png`
          );
          var dailyTemp3 = $("<li>").text("Temp: " + data.daily[3].temp.day);
          var dailyWind3 = $("<li>").text("Wind: " + data.daily[3].wind_speed);
          var dailyHumidity3 = $("<li>").text(
            "Humidity: " + data.daily[3].humidity
          );

          dailyWeather3
            .append(dailyDate3)
            .append(dailyWeatherIcon3)
            .append(dailyTemp3)
            .append(dailyWind3)
            .append(dailyHumidity3);

          var dailyWeather4 = $(".dailyWeather"); 
          var dailyunixDate4 = (data.daily[5].dt)
          var dailydate4 = new Date(dailyunixDate4*1000);
          var dailyDate4 = new Date(dailydate4).toLocaleDateString("en-US")
          console.log(dailyDate4)
          $("<li>").text(dailyDate4)
          var dailyWeather4 = $(".dailyWeather4");
          var dailyWeatherIcon4 = $("<img>").attr(
            "src",
            `http://openweathermap.org/img/wn/${data.daily[4].weather[0].icon}@2x.png`
          );
          var dailyTemp4 = $("<li>").text("Temp: " + data.daily[4].temp.day);
          var dailyWind4 = $("<li>").text("Wind: " + data.daily[4].wind_speed);
          var dailyHumidity4 = $("<li>").text(
            "Humidity: " + data.daily[4].humidity
          );

          dailyWeather4
            .append(dailyDate4)
            .append(dailyWeatherIcon4)
            .append(dailyTemp4)
            .append(dailyWind4)
            .append(dailyHumidity4);
        });
    });
}
