var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/brew', function(req, res) {
  var drink = req.query.param1;
  if ()
  res.send('index', { title: 'Express' });
});

module.exports = router;
