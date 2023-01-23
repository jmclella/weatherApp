// Define Content Modals
const searchContent = document.getElementById('search-content');
const resultContent = document.getElementById('result-content');

const cityForm = document.getElementById('city-form');

// Weather API
const defaultUnits = 'imperial'


async function getWeatherData(city, units) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac6da0680b7ca4f3b8aa1b174215f388&units=${units}`, {mode: 'cors'});
        const weatherData = await response.json()
        cityTemp = weatherData.main.temp;
        cityHumidity = weatherData.main.humidity;
        cityPressure = weatherData.main.pressure;
        cityMin = weatherData.main.temp_min;
        cityMax = weatherData.main.temp_max;
        return createWeatherModal(city, cityTemp, cityHumidity, cityPressure, cityMin, cityMax);
    } catch(e) {
        alert(e);
    };
};


// Create HTML Elements within modal and change display
function createWeatherModal(city, temp, humidity, pressure, min, max) {
    let cityName = document.createElement('p');
    cityName.textContent = city;
    cityName.classList.add('result-city');

    let cityTempDiv = document.createElement('div');
    cityTempDiv.classList.add('data-container');
    let cityTempTitle = document.createElement('p');
    cityTempTitle.textContent = 'Temp';
    cityTempTitle.classList.add('data-title')
    let cityTemp = document.createElement('p');
    cityTemp.classList.add('data-value');
    cityTemp.textContent = `${temp}\u00B0`;
    cityTempDiv.appendChild(cityTempTitle);
    cityTempDiv.appendChild(cityTemp);

    let cityHumidityDiv = document.createElement('div');
    cityHumidityDiv.classList.add('data-container');
    let cityHumidityTitle = document.createElement('p');
    cityHumidityTitle.textContent = 'Humidity';
    cityHumidityTitle.classList.add('data-title');
    let cityHumidity = document.createElement('p');
    cityHumidity.classList.add('data-value');
    cityHumidity.textContent = `${humidity}%`;
    cityHumidityDiv.appendChild(cityHumidityTitle);
    cityHumidityDiv.appendChild(cityHumidity);

    let cityPressureDiv = document.createElement('div');
    cityPressureDiv.classList.add('data-container');
    let cityPressureTitle = document.createElement('p');
    cityPressureTitle.textContent = 'Pressure';
    cityPressureTitle.classList.add('data-title')
    let cityPressure = document.createElement('p');
    cityPressure.classList.add('data-value');
    cityPressure.textContent = `${pressure}mb`;
    cityPressureDiv.appendChild(cityPressureTitle);
    cityPressureDiv.appendChild(cityPressure);

    let cityMinDiv = document.createElement('div');
    cityMinDiv.classList.add('data-container');
    let cityMinTitle = document.createElement('p');
    cityMinTitle.textContent = 'Min Temp';
    cityMinTitle.classList.add('data-title');
    let cityMin = document.createElement('p');
    cityMin.classList.add('data-value');
    cityMin.textContent = `${min}\u00B0`;
    cityMinDiv.appendChild(cityMinTitle);
    cityMinDiv.appendChild(cityMin);

    let cityMaxDiv = document.createElement('div');
    cityMaxDiv.classList.add('data-container');
    let cityMaxTitle = document.createElement('p');
    cityMaxTitle.textContent = 'Max Temp';
    cityMaxTitle.classList.add('data-title');
    let cityMax = document.createElement('p');
    cityMax.classList.add('data-value');
    cityMax.textContent = `${max}\u00B0`;
    cityMaxDiv.appendChild(cityMaxTitle);
    cityMaxDiv.appendChild(cityMax);

    let weatherContainer = document.createElement('div');
    weatherContainer.classList.add('weather-container');

    let weatherHeader = document.createElement('div');
    weatherHeader.classList.add('weather-header');

    let weatherData = document.createElement('div');
    weatherData.classList.add('weather-data');

    weatherHeader.appendChild(cityName);

    weatherData.appendChild(cityTempDiv);
    weatherData.appendChild(cityHumidityDiv);
    weatherData.appendChild(cityPressureDiv);
    weatherData.appendChild(cityMinDiv);
    weatherData.appendChild(cityMaxDiv);

    weatherContainer.appendChild(weatherHeader);
    weatherContainer.appendChild(weatherData);

    resultContent.appendChild(weatherContainer);

    searchContent.style.display = 'none';
    resultContent.style.display = 'block';
};



// Add event listener to form that triggers Weather API
cityForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let citySearch = document.getElementById('city-search').value;
    getWeatherData(citySearch, defaultUnits);
})

