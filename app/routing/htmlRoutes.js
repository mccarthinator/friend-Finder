// Your htmlRoutes.js file should include two routes:
// A GET Route to /survey which should display the survey page.
// A default USE route that leads to home.html which displays the home page.

// Routes

function defineHTMLRoutes(app, ?) {
  app.get('/survey', function (req, res) {
      res.render('survey', {});
  });
  app.use('/home', function (req, res) {
      res.render('home', {
          // superHeroList: superHeroList
      });
  });
}

module.exports = defineHTMLRoutes;