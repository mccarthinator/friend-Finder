// API Routes
var path = require("path");
var friendsArray = require("../data/friends.js");

module.exports = function(app) {
  
  //return friendsArray
  app.get("/api/friends", function(req, res){
    res.json(friendsArray);
  });

   //this takes in the incoming data from survey
  app.post("/api/friends", function(req, res) {
    var friendTotal = req.body;
    var friendScore = friendTotal.scores
    var numScore = [];
    var matches = [];
    for(i=0; i<friendScore.length;i++) {
      numScore.push(parseInt(friendScore[i]));
    }

    console.log(numScore);



totalDiff = 0;
    for(i=0; i<friends.length; i++) {
      console.log(friends[i].scores);
      console.log(numScore);
        for(f=0; f<friends[i].scores.length; f++) {
            diffScore = Math.abs(friends[i].scores[f] - numScore[f]);
          
          console.log(diffScore);
          totalDiff += diffScore

        }

      matches.push({
        name: friends[i].name,
        photo: friends[i].photo,
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