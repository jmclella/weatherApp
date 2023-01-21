
const defaultCity = 'Philadelphia'
const defaultUnits = 'imperial'


async function getWeatherData(city, units) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac6da0680b7ca4f3b8aa1b174215f388&units=${units}`, {mode: 'cors'});
    const weatherData = await response.json()
    console.log(weatherData);
    //return console.log(weatherData.main.temp);
}

getWeatherData(defaultCity, defaultUnits);