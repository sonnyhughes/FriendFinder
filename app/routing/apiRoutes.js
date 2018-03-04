//DEPENDENCIES
var path = require('path');
var friendData = require('../data/friends.js');

// ROUTING
module.exports = function (app) {

    // API GET REQUEST FETCHES FRIEND DATA
    app.get('/api/theList', function (req, res) {
        res.json(friendData);
    });

    // API POST REQUEST COMPARES FRIEND COMPATIBILITY DATA
    app.post('/api/theList', function (req, res) {
        var lowestDifferenceInt = 50;
        var chosenMatch;
        friendData.forEach(function (storedUserObject) {
            var difference = 0;
            for (i = 0; i < storedUserObject.userScore.length; i++) {
                difference += Math.abs(storedUserObject.userScore[i] - req.body.userScore[i]);
            } 
            if (difference < lowestDifferenceInt) {
                lowestDifferenceInt = difference;
                chosenMatch = storedUserObject;
            }
        });

        res.json(chosenMatch);
        friendData.push(req.body);

    });

    //API POST REQUEST DROPS TABLE DATA
    // app.post('/api/clear', function (req, res) {
    //     friendData = [];

    //     console.log(friendData);
    // });
}