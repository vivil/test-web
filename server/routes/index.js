var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  return request('http://api/', function(err, response, body) {
    if (err) {
      res.status(err.status || 500);
      return res.render('error', {
        message: err.message,
        error: {},
        title: 'error'
      });
    }
    res.render('index', { title: 'Express', body: body });
  });
});

module.exports = router;
