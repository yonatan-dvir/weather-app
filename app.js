const request = require("request");

const ACCESS_KEY = "c53dce3000c68a411951788245d6c1d9";

const url = `http://api.weatherstack.com/current?access_key=c53dce3000c68a411951788245d6c1d9&query=New York`;

request({ url: url, json: true }, (error, response) => {
  data = response.body.current;
  console.log(
    `${data.weather_descriptions[0]}. It is currently ${data.temperature} degrees out.`
  );
});
