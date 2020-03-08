console.log("Client side js file is loaded");

const weatherForm = document.querySelector("form");
const searchElement = document.querySelector("input");
const messageOne = document.querySelector("#mess1");
const messageTwo = document.querySelector("#mess2");

weatherForm.addEventListener("submit", e => {
  e.preventDefault();
  const location = searchElement.value;

  fetch("http://localhost:3000/weather?address=" + location).then(response => {
    response.json().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      }
    });
  });
});
