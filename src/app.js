// node cores modules
const path = require("path");
// npm modules
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

// Make the server serve up the public directory
const publicDirPath = path.join(__dirname, "../public");
app.use(express.static(publicDirPath));

// Setting hbs to be the view template engine
app.set("view engine", "hbs");

// Render the index view when accesing to root route
app.get("", (req, res) => {
  res.render("index", {
    title: "Home Page - Weather App",
    name: "Yonatan Dvir",
  });
});

// Render the about view when accesing to about route
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Yonatan Dvir",
  });
});

// Render the help view when accesing to help route
app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    helpText: "This is some helpful text...",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000...");
});
