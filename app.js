const request = require("request");

const WEATHER_KEY = "c53dce3000c68a411951788245d6c1d9";
const GEO_KEY =
  "pk.eyJ1IjoieW9uYXRhbmR2aXIiLCJhIjoiY2xwbmF4a3NkMGo5dDJtdDN1dzVuaDY1OSJ9.yD9BaMV_sDYa1C-PtrVTmw";

const weatherURL = `http://api.weatherstack.com/current?access_key=${WEATHER_KEY}&query=34.053691,-118.242766`;

request({ url: weatherURL, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to weather services!");
  } else if (response.body.error) {
    console.log("Unable to find location! Try another search.");
  } else {
    data = response.body.current;
    console.log(
      `${data.weather_descriptions[0]}. It is currently ${data.temperature} degrees out. Enjoy in ${response.body.location.name}!`
    );
  }
});

const geoURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${GEO_KEY}&limit=1`;

request({ url: geoURL, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to location services!");
  } else if (response.body.features.length === 0) {
    console.log("Unable to find location! Try another search.");
  } else {
    const longitude = response.body.features[0].center[0];
    const latitude = response.body.features[0].center[1];
    const location = response.body.features[0].text;
    console.log(`You are in ${location} in GEO: ${latitude},${longitude}`);
  }
});
