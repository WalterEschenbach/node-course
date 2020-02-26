const https = require("https");

const url =
  "https://api.darksky.net/forecast/c8ae351c82fc5c972c86631172e95892/40,75?lang=en";

https.request(url, () => {
  Response.on("data", chunk => {});
});
