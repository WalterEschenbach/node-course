// Path is built into node.js and is used to handle and transform files paths
// Express is a web framework for node.js
// hbs is an npm package used as the default view engine

const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

// Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
const app = express();

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

//Middleware functions are functions that have access to the request object ( req ), the response object ( res ), and the next function in the application's request-response cycle.

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Walter"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "Walter"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help Section",
    message: "This is some helpful text...",
    name: "Walter"
  });
});

//http endpoint
app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address..."
    });
  }

  geocode(
    req.query.address,
    (error, { latitude, longitude, location } = {}) => {
      if (error) {
        return res.send({
          error
        });
      }
      forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
          return res.send({ error });
        }
        res.send({
          forecast: forecastData,
          location,
          address: req.query.address
        });
      });
    }
  );
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term..."
    });
  }
  console.log(req.query);
  res.send({
    products: []
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Walter",
    errorMessage: "Help article not found..."
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Walter",
    errorMessage: "Page not found..."
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
