const request = require("request");

const GEO_KEY =
  "pk.eyJ1IjoieW9uYXRhbmR2aXIiLCJhIjoiY2xwbmF4a3NkMGo5dDJtdDN1dzVuaDY1OSJ9.yD9BaMV_sDYa1C-PtrVTmw";

// Return the geocode of the given address
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

module.exports = geocode;
