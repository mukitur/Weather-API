function loadDefaultDhakaTemp() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Dhaka&APPID=c1ff8fb510e409064861a583df306d25')
        .then(res => res.json())
        .then(data => dispaDhakaTemp(data));
}

loadDefaultDhakaTemp();

const dispaDhakaTemp = data => {
    console.log(data);

    const dhakaTemp = document.getElementById('default-Dhaka');
    const div = document.createElement('div');
    div.innerHTML = `
    <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
    <h1>${data.name}</h1>
    <h3><span>${(data.main.temp - 273.15).toFixed(2)}</span>&deg;C</h3>
    <h1 class="lead">${data.weather[0].main}</h1>
    <h3 class="lead"> Latitude: ${data.coord.lat}, Longitude: ${data.coord.lon}  </h3> 
    `;
    dhakaTemp.appendChild(div);
}


function loadTemperature() {
    const getinputLocation = document.getElementById('get-location');
    const getLocation = getinputLocation.value;
    getinputLocation.value = '';

    if (getinputLocation.length == 0) {
        alert('Please Enter Your City Name');
    }
    else {
        const api = 'c1ff8fb510e409064861a583df306d25';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${getLocation}&APPID=${api}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayWeather(data))
    }
}

const displayWeather = data => {
    //console.log(data);
    document.getElementById('default-Dhaka').style.display = 'none';
    const weather = document.getElementById('weather-id');
    const div = document.createElement('div');
    weather.textContent = '';
    div.innerHTML = `
        <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
        <h1>${data.name}</h1>
        <h3><span>${(data.main.temp - 273.15).toFixed(2)}</span>&deg;C</h3>
        <h1 class="lead">${data.weather[0].main}</h1>
        <h3 class="lead"> Latitude: ${data.coord.lat}, Longitude: ${data.coord.lon}  </h3>
    `;
    weather.appendChild(div);
}