const request = require("request");

const FORECAST_KEY = "c53dce3000c68a411951788245d6c1d9";

const forecast = (geoCoordinates, callback) => {
  const weatherURL = `http://api.weatherstack.com/current?access_key=${FORECAST_KEY}&query=${geoCoordinates}`;
  let weatherMessage = "t";
  request({ url: weatherURL, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather services!", undefined);
    } else if (response.body.error) {
      callback("Unable to find location! Try another search.", undefined);
    } else {
      data = response.body.current;
      weatherMessage = `${data.weather_descriptions[0]}. It is currently ${data.temperature} degrees out. Enjoy in ${response.body.location.name}!`;
      callback(undefined, weatherMessage);
    }
  });
};

module.exports = forecast;
