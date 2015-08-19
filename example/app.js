var express = require('express');
// requires the dotenv module & runs its load function immediately
var dotenv = require('dotenv').load();
var app = express();
var port = process.env.PORT || 3000
// can also read in secrets.json & parse dat sheeit

app.get('/', function(req, res) {
  var secret = process.env.anna;
    res.send("Anna is... " + secret + " but " + process.env.so_very_secret2);
});


app.listen(port, function() {
  console.log("ok listening");
});



// Grabbing an API key from our environment
// and making a request
// ----------------------------------------

// var express = require('express');
// var request = require('request');
// var app = express();

// app.get('/', function(req, res) {
//   var apiKey = process.env.wunderground_key;
//   var requestUrl = "http://api.wunderground.com/api/" + apiKey + "/conditions/q/CA/San_Francisco.json"
//   request.get(requestUrl, function(err, response, body) {
//     res.send(body);
//   });
// })

// app.listen(3000, function() {
//   console.log("I'm listening, Anna. Always. Port 3000")
// });



// Super simple example app -
// just sending an environmental variable on over
// ----------------------------------------------

// var express = require('express');
// var app = express();

// app.get('/', function(req, res) {
//   res.send(process.env.anna);
// })

// app.listen(3000);



// One-liner

// console.log(process.env.your_secret_name)









