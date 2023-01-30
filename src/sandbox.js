import fetch from 'node-fetch';

const APIKey = '2c90294ffc8f3aba96a28d8de4977cd3'

const getCoords = async function getLatitudeAndLongitude(search) {
  const response = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${APIKey}`,
    { mode: 'cors' }
  );
  const geocode = await response.json();
  console.log(geocode);
  return geocode;
};

const getCurrentWeather = async function getCurrentWeatherDataFromCoords(coords, units) {
  const {lat} = coords[0];
  const {lon} = coords[0];
  const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}&units=${units}`, {mode: 'cors'});
  const weatherData = await weatherResponse.json();
  console.log(weatherData);
  return weatherData;
}

const getData = async function getWeatherData(search) {
  const parisCoords = await getCoords(search);
  const parisWeather = await getCurrentWeather(parisCoords, 'metric')
  return parisWeather;
}

const result = getData('Paris');

result

