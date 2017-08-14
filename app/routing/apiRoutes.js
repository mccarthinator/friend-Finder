// API Routes

var friendsArray = require("../data/friends.js");

module.exports = function(app) {
  
  //return friendsArray
  app.get("/api/friends", function(req, res){
    res.json(friendsArray);
  });

  app.post("/api/friends", function(req, res) {
    var newUser = req.body;