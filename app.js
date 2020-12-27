const apiKey = "e1d7cd4f451993f3524efc14e709c907";
const apiBase = "https://api.openweathermap.org/data/2.5/weather";

const getWeatherData = city => {
    const url = `${apiBase}?q=${city}&units=metric&APPID=${apiKey}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        updateUI(data);
    })
}

const searchBtn = document.getElementById("search-button");
searchBtn.addEventListener("click", () => {
    const inputCity = document.getElementById("city").value;
    //console.log(inputCity);
    getWeatherData(inputCity);
})

const updateUI = data => {
    document.getElementById("show-city").innerText = data.name || "Unknown Location!";
    document.getElementById("show-temperature").innerText = data.main.temp;
    document.getElementById("weather-status").innerText = data.weather[0].main;
    document.getElementById("icon").setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    document.getElementById("city").value = "";
}

getWeatherData("Dhaka");