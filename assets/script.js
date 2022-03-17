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
    $(savedCitiesButtons).append(`<button class="">${searchedCitiesArr[i]}</button>`)

    // searchedCitiesBtn.on("click", function (event) {
    //   event.preventDefault();
    //   searchedCities = JSON.parse(localStorage.getItem('userInput'));
    //   if (searchedCities == null) {
    //     searchedCities = [];
    //     console.log(searchedCities)
      
    //   }
    //   fetchWeather();
    // })
  }
}    
// })

// function cityInfo () {
//     var userRequest = localStorage.getItem('userInput')
//     var lat
//     var lon
//     var geoURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + userRequest + "&limit=5&appid=8d68dd5ea4e78aa35a048f052125b784"
//     console.log(geoURL);
// }  
//create function that handles the click event of the search history buttons


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

        var cityName = $('.cityName')
        .text(data[0].name) 
        $("<h2>")
          .text(data)
        .appendTo(cityName);
  
        
        console.log(weatherURL);
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
            // var currentWeather = $('.currentWeather')
            // .text(data[0].name.current.temp)
            // $("<h3>")
            // .text(data)
            // .appendTo(currentWeather);

        // var currentWeather = $('.currentWeather')
        // .text(data[0].current.temp)
        // .text(data[0].current.wind_speed)
        // appendTo(currentWeather)

      });
    });
    

}
    

    // cityInfo();


      //"http://api.openweathermap.org/geo/1.0/direct?q=" + userRequest + "&limit=5&appid=8d68dd5ea4e78aa35a048f052125b784"
    //   "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon "&appid=8d68dd5ea4e78aa35a048f052125b784"