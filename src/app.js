const request = require("request");
const express = require("express");
// const geocode = require("./utils/geocode.js");
// const forecast = require("./utils/forecast.js");

// geocode("boston", (error, data) => {
//   error ? console.log(error) : console.log(data);
//   forecast(data, (error, data) => {
//     error ? console.log(error) : console.log(data);
//   });
// });

const app = express();

app.get("", (req, res) => {
  res.send("You are in the home page");
});

app.listen(3000, () => {
  console.log("Server is up on port 3000...");
});
