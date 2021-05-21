var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express page',
    SideA: 'Dark',
    SideB: 'Bright',
    NameA: 'Sith',
    NameB: 'Jedi'
  });
});

module.exports = router;
