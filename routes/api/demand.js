var express = require('express');
var router = express.Router();

var redis = require('redis');
var client = redis.createClient(6379, "127.0.0.1");

/* GET home page. */
// /api/some...
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express123' });
});


// routes : api/write
router.post('/write', function (req, res) {
  console.log(req.body);
  var data = req.body;

  client.hset("write",'1',JSON.stringify(data),function(err){
    if(err){
      console.log(err);
    }
    console.log('compelete!');
  });
});


module.exports = router;