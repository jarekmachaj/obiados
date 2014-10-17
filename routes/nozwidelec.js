var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');

function get(res){
  var url = 'http://www.nozwideleccatering.pl/menu-obiad-dnia';
  request(url,
    function(error, response, html){
      if(!error){
			     var $ = cheerio.load(html);
           var str = $('h1 em span').html();
           console.log(str);
           res.send(str);
      }
    });
  }

/* GET users listing. */
router.get('/', function(req, res) {
  var d = new Date();
  get(res);
});

module.exports = router;
