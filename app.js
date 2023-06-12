const searchForm = document.querySelector("#search-form");

function searchCity(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#search-box");
  cityElement.innerHTML = cityInput.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=f8e6a9e3d6fde87cb38868da460b1371&units=imperial`;
  axios.get(apiUrl).then(showTemperature);
}

let now = new Date();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
let hours = now.getUTCHours();
let minutes = now.getUTCMinutes();
let h2 = document.querySelector("h2");
h2.innerHTML = `${day}, ${hours}:${minutes}`;

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = temperature + "°F";
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
}
searchForm.addEventListener("submit", searchCity);
