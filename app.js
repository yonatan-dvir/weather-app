const request = require("request");

const WEATHER_KEY = "c53dce3000c68a411951788245d6c1d9";
const GEO_KEY =
  "pk.eyJ1IjoieW9uYXRhbmR2aXIiLCJhIjoiY2xwbmF4a3NkMGo5dDJtdDN1dzVuaDY1OSJ9.yD9BaMV_sDYa1C-PtrVTmw";

const geocode = (address, callback) => {
  const geoURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=${GEO_KEY}&limit=1`;
  let geoMessage = "";
  request({ url: geoURL, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find location! Try another search.", undefined);
    } else {
      const longitude = response.body.features[0].center[0];
      const latitude = response.body.features[0].center[1];
      callback(undefined, `${latitude},${longitude}`);
    }
  });
};

const weather = (geos, callback) => {
  const weatherURL = `http://api.weatherstack.com/current?access_key=${WEATHER_KEY}&query=${geos}`;
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

geocode("netanya", (error, data) => {
  error ? console.log(error) : console.log(data);
  weather(data, (error, data) => {
    error ? console.log(error) : console.log(data);
  });
});
