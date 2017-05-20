var fs = require('fs');
var path = require("path");
var matchmaker =require('../matchmaker.js');

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.sendFile(path.join(__dirname, "../data/friends.JSON"));
    });
    app.post("/api/friends", function (req, res) {
        res.json(matchmaker);
    });
};