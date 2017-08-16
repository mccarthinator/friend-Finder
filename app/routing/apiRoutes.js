// API Routes
var path = require("path");
var friendsArray = require("../data/friends.js");

module.exports = function(app) {
  
  //return friendsArray
  app.get("/api/friends", function(req, res){
    res.json(friendsArray);
  });

  
app.post("/api/tables", function(req,res) {
  var rawFriend = req.body;
  var rawScore = rawFriend.scores
  var numScore = [];
  var matches = [];
  for(i=0; i<rawScore.length;i++) {
    numScore.push(parseInt(rawScore[i]));
  }

  console.log(numScore);



totalDiff = 0;
  for(i=0; i<friendsArray.length; i++) {
    console.log(friendsArray[i].scores);
    console.log(numScore);
      for(j=0; j<friendsArray[i].scores.length; j++) {
          diffScore = Math.abs(friendsArray[i].scores[j] - numScore[j]);
        
        console.log(diffScore);
        totalDiff += diffScore

      }

    matches.push({
      name: friendsArray[i].name,
      photo: friendsArray[i].photo,
      totaldiff: totalDiff});
      console.log(totalDiff);
      totalDiff = 0
      }

     console.log(matches);
     matches.sort(function(a,b) {
    return a.totaldiff - b.totaldiff;
     });


  match = JSON.stringify(matches[0]);
  res.json(match);

});




};