/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// Define Content Modals\nconst searchContent = document.getElementById('search-content');\nconst resultContent = document.getElementById('result-content');\n\nconst cityForm = document.getElementById('city-form');\n\n// Weather API\nconst defaultUnits = 'imperial'\n\n\nasync function getWeatherData(city, units) {\n    try {\n        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac6da0680b7ca4f3b8aa1b174215f388&units=${units}`, {mode: 'cors'});\n        const weatherData = await response.json()\n        cityTemp = weatherData.main.temp;\n        cityHumidity = weatherData.main.humidity;\n        cityPressure = weatherData.main.pressure;\n        cityMin = weatherData.main.temp_min;\n        cityMax = weatherData.main.temp_max;\n        return createWeatherModal(city, cityTemp, cityHumidity, cityPressure, cityMin, cityMax);\n    } catch(e) {\n        alert(e);\n    };\n};\n\n\n// Create HTML Elements within modal and change display\nfunction createWeatherModal(city, temp, humidity, pressure, min, max) {\n    let cityName = document.createElement('p');\n    cityName.textContent = city;\n    cityName.classList.add('result-city');\n\n    let cityTempDiv = document.createElement('div');\n    cityTempDiv.classList.add('data-container');\n    let cityTempTitle = document.createElement('p');\n    cityTempTitle.textContent = 'Temp';\n    cityTempTitle.classList.add('data-title')\n    let cityTemp = document.createElement('p');\n    cityTemp.classList.add('data-value');\n    cityTemp.textContent = `${temp}\\u00B0`;\n    cityTempDiv.appendChild(cityTempTitle);\n    cityTempDiv.appendChild(cityTemp);\n\n    let cityHumidityDiv = document.createElement('div');\n    cityHumidityDiv.classList.add('data-container');\n    let cityHumidityTitle = document.createElement('p');\n    cityHumidityTitle.textContent = 'Humidity';\n    cityHumidityTitle.classList.add('data-title');\n    let cityHumidity = document.createElement('p');\n    cityHumidity.classList.add('data-value');\n    cityHumidity.textContent = `${humidity}%`;\n    cityHumidityDiv.appendChild(cityHumidityTitle);\n    cityHumidityDiv.appendChild(cityHumidity);\n\n    let cityPressureDiv = document.createElement('div');\n    cityPressureDiv.classList.add('data-container');\n    let cityPressureTitle = document.createElement('p');\n    cityPressureTitle.textContent = 'Pressure';\n    cityPressureTitle.classList.add('data-title')\n    let cityPressure = document.createElement('p');\n    cityPressure.classList.add('data-value');\n    cityPressure.textContent = `${pressure}mb`;\n    cityPressureDiv.appendChild(cityPressureTitle);\n    cityPressureDiv.appendChild(cityPressure);\n\n    let cityMinDiv = document.createElement('div');\n    cityMinDiv.classList.add('data-container');\n    let cityMinTitle = document.createElement('p');\n    cityMinTitle.textContent = 'Min Temp';\n    cityMinTitle.classList.add('data-title');\n    let cityMin = document.createElement('p');\n    cityMin.classList.add('data-value');\n    cityMin.textContent = `${min}\\u00B0`;\n    cityMinDiv.appendChild(cityMinTitle);\n    cityMinDiv.appendChild(cityMin);\n\n    let cityMaxDiv = document.createElement('div');\n    cityMaxDiv.classList.add('data-container');\n    let cityMaxTitle = document.createElement('p');\n    cityMaxTitle.textContent = 'Max Temp';\n    cityMaxTitle.classList.add('data-title');\n    let cityMax = document.createElement('p');\n    cityMax.classList.add('data-value');\n    cityMax.textContent = `${max}\\u00B0`;\n    cityMaxDiv.appendChild(cityMaxTitle);\n    cityMaxDiv.appendChild(cityMax);\n\n    let weatherContainer = document.createElement('div');\n    weatherContainer.classList.add('weather-container');\n\n    let weatherHeader = document.createElement('div');\n    weatherHeader.classList.add('weather-header');\n\n    let weatherData = document.createElement('div');\n    weatherData.classList.add('weather-data');\n\n    weatherHeader.appendChild(cityName);\n\n    weatherData.appendChild(cityTempDiv);\n    weatherData.appendChild(cityHumidityDiv);\n    weatherData.appendChild(cityPressureDiv);\n    weatherData.appendChild(cityMinDiv);\n    weatherData.appendChild(cityMaxDiv);\n\n    weatherContainer.appendChild(weatherHeader);\n    weatherContainer.appendChild(weatherData);\n\n    resultContent.appendChild(weatherContainer);\n\n    searchContent.style.display = 'none';\n    resultContent.style.display = 'block';\n};\n\n\n\n// Add event listener to form that triggers Weather API\ncityForm.addEventListener('submit', (event) => {\n    event.preventDefault();\n    let citySearch = document.getElementById('city-search').value;\n    getWeatherData(citySearch, defaultUnits);\n})\n\n\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;