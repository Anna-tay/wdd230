// api variables
const lon = 49.76269;
const lat = 6.63228;


const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = `https://api.openweathermap.org/data/2.5/weather?lat=6.639&lon=49.75&appid=37bc3e0b8ff59bf4f3fd287799381114&units=metric`

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    let main_weather = data.weather;
    main_weather.forEach((weather) => {
        const iconsrc = `https://openweathermap.org/img/w/${weather.icon}.png`;
        let desc = data.weather[0].icon;
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', 'Img Icon');
        weatherIcon.setAttribute('loading', 'lazy');
    })
    captionDesc.textContent = `${desc}`;
}
async function apiFetch(){

    try {
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error (await response.text());
        }
    } catch (error){
        console.log(error);
    }
}


apiFetch();