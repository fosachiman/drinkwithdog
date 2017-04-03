var express = require('express');
var router = express.Router();
var Bar = require('../models/bars');

router.get('/api', function(req, res, next) {
  Bar.find(function (err, bars) {
    if (err) console.error(err);
    res.json({ bars: bars });
  })
});




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
    {
      title: 'Express',
    });
});


module.exports = router;
