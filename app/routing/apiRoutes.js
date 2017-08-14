// API Routes

var friendsArray = require("../data/friends.js");

module.exports = function(app) {
  
  //return friendsArray
  app.get("/api/friends", function(req, res){
    res.json(friendsArray);
  });

   //this takes in the incoming data from survey
  app.post("/api/friends", function(req, res) {
    var newUser = req.body;
    //this needs to change their answers into number values
    newUser.scores = newUser.scores.??? 

    ///// next, need to calculate absolute value difference between user scores ////
    function findAbsoluteValue(){
    };

    // find lowest absolute value score ////
    var lowestAbsVal = "";

    //// need a function that adds new user to the friendsArray

    ////need a function that returns the user which has lowest abs value score to the modal //////

    ///call that function ^ ////