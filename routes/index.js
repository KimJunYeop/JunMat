var express = require('express');
var router = express.Router();

var client_id = 'oqWQBcCe7OyS1fXJKoTC';
var client_secret  = '94iPBG2iKH';

/* GET main page. */
router.get('/', function (req, res, next) {
  res.render('main', { layout: 'layout'});
});

router.get('/geocode', function (req, res) {
  var api_url = 'https://openapi.naver.com/v1/map/geocode?query=' + encodeURI(req.query.query); // json
  //var api_url = 'https://openapi.naver.com/v1/map/geocode.xml?query=' + encodeURI(req.query.query); // xml
  var request = require('request');
  var options = {
      url: api_url,
      headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
   };
  request.get(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log('error = ' + response.statusCode);
    }
  });
});

router.get('/write', function (rqe, res) {
  res.render('write', { layout: 'layout'});
});


module.exports = router;
