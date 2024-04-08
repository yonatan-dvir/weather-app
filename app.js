const request = require("request");
const geocode = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");

geocode("netanya", (error, data) => {
  error ? console.log(error) : console.log(data);
  forecast(data, (error, data) => {
    error ? console.log(error) : console.log(data);
  });
});
