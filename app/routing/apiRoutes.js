// API Routes

var friendsArray = require("../data/friends.js");

module.exports = function(app) {
  
  //return the friends array
  app.get("/api/friends", function(req, res){
    res.json(friendsArray);
  });

  