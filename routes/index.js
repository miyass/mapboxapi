var express = require('express');
var router = express.Router();

var connection = require('../mysqlConnection');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/v1', function (req, res, next) {
  var getClipListQuery = 'SELECT * FROM clips'
  connection.query(getClipListQuery, function (error, clip) {
    var ClipListJson = JSON.stringify(clip);
    res.send(ClipListJson);
  });
});

module.exports = router;
