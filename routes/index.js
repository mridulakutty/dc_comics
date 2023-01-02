
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DC Comics' });
});
/* GET comics1 page*/
router.get('/comic1', function(req, res, next) {
  res.render('comic1');
});
/* GET comics2 page*/
router.get('/comic2', function(req, res, next) {
  res.render('comic2');
});
/* GET comics3 page*/
router.get('/comic3', function(req, res, next) {
  res.render('comic3');
});
/* GET comics4 page*/
router.get('/comic4', function(req, res, next) {
  res.render('comic4');
});
/* GET comics5 page*/
router.get('/comic5', function(req, res, next) {
  res.render('comic5');
});

module.exports = router;