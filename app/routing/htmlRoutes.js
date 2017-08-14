// Your htmlRoutes.js file should include two routes:
// A GET Route to /survey which should display the survey page.
// A default USE route that leads to home.html which displays the home page.


// dependencies //
var path = require("path");


// Routes

module.exports = function(app) {
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });
  
  app.use('/home', function (req, res) {
      res.render('home', {
          // superHeroList: superHeroList
      });
  });
}

module.exports = defineHTMLRoutes;