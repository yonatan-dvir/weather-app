// node cores modules
const path = require("path");
// npm modules
const hbs = require("hbs");
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

// Define paths for Express config
const publicDirPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Set up handlebars (hbs) engine, views location, hbs partials location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Set up static directory to serve
app.use(express.static(publicDirPath));

// Render the index view when accesing to root route
app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
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
    name: "Yonatan Dvir",
  });
});

// Render the help view when accesing to help route
app.get("*", (req, res) => {
  res.render("404", {
    title: "404 Page",
    errorMessage: "Page not found!",
    name: "Yonatan Dvir",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000...");
});
