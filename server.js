// Pull in required dependencies
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

// Configure the Express application
var app = express();
var PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, "./app/public")));

// Add the application routes
require(path.join(__dirname, "./app/routing/apiRoutes"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);

// Start listening on PORT
app.listen(PORT, function() {
  console.log("Friend Finder app is listening on PORT: " + PORT);
});
