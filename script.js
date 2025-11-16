const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityName");
const apikey = "e654f0890d9f84029678c42a35a364a6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city) {
        checkWeather(city);
    } else {
        alert("Please enter a city name!");
    }
});

setInterval(localDateTime, 1000);

async function checkWeather(city = 'Hyderabad') {
    const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apikey}`)
    var data = await response.json();

    console.log(data);

    // document.querySelector(".weather-type").innerHTML = data.weather.Array.0.main
    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector(".weather-type").innerHTML = 'Weather: ' + data.weather[0].main;
    document.querySelector(".temperature").innerHTML = 'Temperature: ' + Math.round(data.main.temp) + '<sup>o</sup>C';
    document.querySelector(".feels-like").innerHTML = 'Feels Like: ' + data.main.humidity + '<sup>o</sup>C';
    document.querySelector(".min-max").innerHTML = 'Min/Max: ' + Math.round(data.main.temp_min) + '/' + Math.round(data.main.temp_max) + '<sup>o</sup>C';
    document.querySelector(".pressure").innerHTML = 'Pressure: ' + data.main.pressure + '-hPa';
    document.querySelector(".humidity").innerHTML = 'Humidity: ' + data.main.humidity + '%';
    document.querySelector(".visibility").innerHTML = 'Visibility: ' + data.visibility + ' M';
    document.querySelector(".wind-speed").innerHTML = 'Wind-Speed: ' + data.wind.speed + ' Km';

    localDateTime();
}

function localDateTime() {
    // Current date and time
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    document.querySelector(".day").textContent = now.toLocaleDateString('en-US', { weekday: 'long' });
    document.querySelector(".date").textContent = now.toLocaleDateString('en-US', options);
    document.querySelector(".time").textContent = timeString;
}
checkWeather();