var express = require('express');
var router = express.Router();

var News = require('../models/News');
router.get('/getNewsById/:newsid', function (req, res) {
    var newsid = req.params.newsid;
    var news = new News();
    news.findById(newsid, function (err, result) {
        if (err) {
            res.send('not found');
        }
        res.json(result.length === 1 ? result[0] : result);
    });
});

router.post('/getNewsByCate', function (req, res) {
    var category = req.body['category'];
    var news = new News();
    news.findByCate(category, function (err, result) {
        var rtn = "";
        for (var index in result) {
            if (result[index]['imgUrl'] != "") {
                var img_div = "<div class='am-u-sm-4 am-list-thumb'><a href='#'><img src=" + result[index]['imgUrl'] + "/></a></div>";
                var ctn_div = "<div class='am-u-sm-8 am-list-main'>" +
                    "<h3 class='am-list-item-hd'><a href='#'>" + result[index]['title'] + "</a></h3>" +
                    "<div class='am-list-item-text'>" + result[index]['description'] + "</div>" +
                    "</div>";
                var all = "<li class='am-g am-list-item-desced am-list-item-thumbed am-list-item-thumb-left' data-index='" + result[index]['id'] + "'>"
                    + img_div + ctn_div +
                    "</li>";
                rtn += all;
            } else {
                var ctn_div = "<div class='am-list-main'>" +
                    "<h3 class= 'am-list-item-hd'><a href = '#'>" + result[index]['title'] + " </a></h3> " +
                    "<div class= 'am-list-item-text'> " + result[index]['description'] + " </div> " +
                    "</div>";
                var all = "<li class='am-g am-list-item-desced' data-index='" + result[index]['id'] + "'>" + ctn_div + "</li>";
                rtn += all;
            }
        }
        res.send(rtn);
    });
});

router.post('/addOneNew', function (req, res) {
    var news = new News();
    news.addOneNew(req.body, function(err, result){
        if(err){
            res.send("<h1>添加失败</h1>");
        }
        res.send("<h1>添加成功</h1>");
    });
});

router.get('/getAllNews', function (req, res) {
    var news = new News();
    news.findAll(function (err, result) {
        if (err) {
            res.send('not found');
        }
        res.json(result);
    });
});

module.exports = router;
