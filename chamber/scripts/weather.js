// api variables
const lon = 43.82;
const lat = -111;
// getting time for next three days 
// Create a new Date object for the current date and time
const currentDate = new Date();

// Get the Unix time (milliseconds since January 1, 1970)
const unixTime = currentDate.getTime();

const today = Math.floor(unixTime / 1000);
const tomorrow = today + 86400;
const nextday = tomorrow + 86400;

// today
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#description');

// tom
const currentTemp_tom = document.querySelector('#current-temp_tom');
const weatherIcon_tom = document.querySelector('#weather-icon_tom');
const captionDesc_tom = document.querySelector('#description_tom');

// nd
const currentTemp_nd = document.querySelector('#current-temp_nd');
const weatherIcon_nd = document.querySelector('#weather-icon_nd');
const captionDesc_nd = document.querySelector('#description_nd');
// const description = document.querySelector('#description');

// links
const url_today = `https://api.openweathermap.org/data/2.5/weather?lat=${lon}&lon=${lat}&appid=37bc3e0b8ff59bf4f3fd287799381114&units=metric&dt=${today}`;
const url_tom = `https://api.openweathermap.org/data/2.5/weather?lat=${lon}&lon=${lat}&appid=37bc3e0b8ff59bf4f3fd287799381114&units=metric&dt=${tomorrow}`;
const url_nd = `https://api.openweathermap.org/data/2.5/weather?lat=${lon}&lon=${lat}&appid=37bc3e0b8ff59bf4f3fd287799381114&units=metric&dt=${nextday}`;

function displayResults(data_today, data_tom, data_nd) {
    currentTemp.innerHTML = `${data_today.main.temp}&deg;C`;
    let main_weather = data_today.weather;
    main_weather.forEach((weather) => {
        const iconsrc = `https://openweathermap.org/img/w/${weather.icon}.png`;
        let desc = data_today.weather[0].icon;
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', 'Img Icon');
        weatherIcon.setAttribute('loading', 'lazy');
    })
    captionDesc.textContent = `${data_today.weather[0].description}`;

    currentTemp_tom.innerHTML = `${data_tom.main.temp}&deg;C`;
    let tom_weather = data_tom.weather;
    tom_weather.forEach((weather) => {
        const iconsrc = `https://openweathermap.org/img/w/${weather.icon}.png`;
        let desc = data_tom.weather[0].icon;
        weatherIcon_tom.setAttribute('src', iconsrc);
        weatherIcon_tom.setAttribute('alt', 'Img Icon');
        weatherIcon_tom.setAttribute('loading', 'lazy');
    })
    captionDesc_tom.textContent = `${data_tom.weather[0].description}`;

    currentTemp_nd.innerHTML = `${data_nd.main.temp}&deg;C`;
    let nd_weather = data_nd.weather;
    nd_weather.forEach((weather) => {
        const iconsrc = `https://openweathermap.org/img/w/${weather.icon}.png`;
        let desc = data_nd.weather[0].icon;
        weatherIcon_nd.setAttribute('src', iconsrc);
        weatherIcon_nd.setAttribute('alt', 'Img Icon');
        weatherIcon_nd.setAttribute('loading', 'lazy');
    })
    captionDesc_nd.textContent = `${data_nd.weather[0].description}`;
}

async function apiFetch(){

    try {
        const response_today = await fetch(url_today);
        const response_tom = await fetch(url_tom);
        const response_nd = await fetch(url_nd);
        if(response_today.ok ){
            const data_today = await response_today.json();
            const data_tom = await response_tom.json();
            const data_nd = await response_nd.json();
            displayResults(data_today, data_tom, data_nd);
        } else {
            throw Error (await response_today.text());
        }
    } catch (error){
        console.log(error);
    }
}


apiFetch();