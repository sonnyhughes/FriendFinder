// DEPENDENCIES
var path = require('path');

// ROUTING
module.exports = function (app) {

    // HTML GET REQUEST NAVIAGATES TO HOME PAGE
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });

    // HTML GET REQUEST NAVIAGATES TO SURVEY PAGE
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });

}