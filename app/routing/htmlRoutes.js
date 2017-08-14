// Your htmlRoutes.js file should include two routes:
// A GET Route to /survey which should display the survey page.
// A default USE route that leads to home.html which displays the home page.


// dependencies //
var path = require("path");


// Routes

var friends = require("../data/friends.js");

////////////

module.exports = function(app) {
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  app.use(function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
      });
};

module.exports = defineHTMLRoutes;