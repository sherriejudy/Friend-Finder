var friends = require("../data/friends.js");

//==============================================
//ROUTING
//==============================================

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function (req, res) {
    var differences;
    var match = {
      name: "",
      photo: "",
      diff: 1000
    };
    for (var i = 0; i < friends.length; i++) {
      differences = 0;
      for (var j = 0; j < friends[i].scores.length; j++) {
        differences += Math.abs(
          parseInt(req.body.scores[j]) - friends[i].scores[j]
        );
      }
      if (match.diff > differences) {
        match.name = friends[i].name;
        match.photo = friends[i].photo;
        match.diff = differences;
      }
    }
    friends.push(req.body);
    console.log(match)
    res.json(match);
  });
};

//list of friends
//new friend
//compare new friend with every friend in friend list, whichever difference smallest in scores, is your new bff
//minus all scores, add the differences, compare the sum of difference to find smallest
