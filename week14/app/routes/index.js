var express = require('express');
var router = express.Router();

/* GET home page. */
var News = require('../models/News');
router.get('/', function (req, res, next) {
    var news = new News();
    news.findAll(function (err, result) {
        res.render('index.ejs', {newsList: result});
    });
});

router.get('/admin', function (req, res) {
    res.render('admin.ejs');
});

module.exports = router;
