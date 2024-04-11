console.log("Client Side JS is loaded!");

const weatherForm = document.querySelector("form");
weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const address = document.querySelector("input").value;
  fetch(`http://localhost:3000/weather?address=${address}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        console.log(data.error);
        document.querySelector(".message").textContent = data.error;
      } else {
        console.log(data.forecast);
        document.querySelector(".message").textContent = data.forecast;
      }
    });
  });
});
