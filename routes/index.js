var express = require('express');
var router = express.Router();

function scrapYo(){
  return "scrapped value";
}

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express', scrapped : scrapYo() });
});

module.exports = router;
