console.log("Client side js file is loaded");

const weatherForm = document.querySelector("form");
const searchElement = document.querySelector("input");
const messageOne = document.getElementById("#message-1");
const messageTwo = document.getElementById("#message-2");

messageOne.textContent = "From JavaScript";

weatherForm.addEventListener("submit", e => {
  e.preventDefault();
  const location = searchElement.value;

  fetch("http://localhost:3000/weather?address=" + location).then(response => {
    response.json().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data.location);
        console.log(data.forecast);
      }
    });
  });
});
