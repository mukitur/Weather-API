function loadTemperature() {
    const getinputLocation = document.getElementById('get-location');
    const getLocation = getinputLocation.value;
    getinputLocation.value = '';

    const api = 'c1ff8fb510e409064861a583df306d25';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${getLocation}&APPID=${api}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayWeather(data))
}

const displayWeather = data => {
    console.log(data);
    const weather = document.getElementById('weather-id');
}