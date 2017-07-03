const express = require('express');
const app = express();
var request = require('request');
var proxyURL = 'http://localhost:8090/auth/openidconnect';
var issuers = ['http://localhost:8080/auth/realms/master','http://localhost:8180/auth/realms/master'];

app.set('view engine', 'ejs');

//routes
app.get('/', function (req, res) {
  res.render('index.ejs');
});

app.get('/profile', function (req, res) {
  res.render('profile.ejs');
});

app.get('/login', function (req, res) {
  request.get(proxyURL + '?issuer=' + issuers[0], function(err, httpResponse, body){
    res.write(body);
  });
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});