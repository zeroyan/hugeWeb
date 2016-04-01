/**
 * Created by zeroyan on 16/2/22.
 */
var db = require('../config/database');

Date.prototype.Format = function (format) {
    var o = {
        "M+": this.getMonth() + 1, //month
        "d+": this.getDate(), //day
        "h+": this.getHours(), //hour
        "m+": this.getMinutes(), //minute
        "s+": this.getSeconds(), //second
        "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
        "S": this.getMilliseconds() //millisecond
    };
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
        (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)if (new RegExp("(" + k + ")").test(format))
        format = format.replace(RegExp.$1,
            RegExp.$1.length == 1 ? o[k] :
                ("00" + o[k]).substr(("" + o[k]).length));
    return format;
};

//string.prototype.CheckSqlValid = function (str) {
//    var re = /select|update|delete|exec|count|’|"|=|;|>|<|%/i;
//    if(re.test(str.value)) return false;
//    return true;
//};

var News = function () {
};

News.prototype.findAll = function (callback) {
    var sql = "SELECT * FROM news";
    db.pool.getConnection(function (err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, function (err, results) {
            if (err) {
                callback(true);
                return;
            }
            callback(false, results);
        });
        connection.release();
    });

};

News.prototype.findZone = function (m, n, callback) {
    var sql = "SELECT * FROM news limit ?, ?";
    //验证输入参数m,n，必须为正整数
    m = parseInt(m);
    n = parseInt(n);
    if (m < 0 || n < 0) return;

    db.pool.getConnection(function (err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [m, n], function (err, results) {
            if (err) {
                callback(true);
                return;
            }
            callback(false, results);
        });
        connection.release();
    });
};

News.prototype.findById = function (id, callback) {
    //验证输入参数id必须为正整数
    if (id < 0) return;

    var sql = "SELECT * FROM news WHERE id =?";
    // get a connection from the pool
    db.pool.getConnection(function (err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [id], function (err, results) {
            if (err) {
                callback(true);
                return;
            }
            callback(false, results);
        });
        connection.release();
    });
};

News.prototype.findByCate = function (cate, callback) {
    //验证cate必须为有效输入数据，并不能包含敏感字符
    cate = escape(cate);
    if (cate.length >= 8) return;

    var sql = "SELECT * FROM news WHERE category =?";
    // get a connection from the pool
    db.pool.getConnection(function (err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [cate], function (err, results) {
            if (err) {
                callback(true);
                return;
            }
            callback(false, results);
        });
        connection.release();
    });
};

News.prototype.addOneNew = function (oneNew, callback) {
    // get a connection from the pool
    db.pool.getConnection(function (err, connection) {
        if (err) {
            callback(true);
            return;
        }
        var sql = "INSERT INTO news (title, imgUrl, description, createTime, category) VALUES " +
            "('" + oneNew['title'] + "'," +
            "'" + oneNew['imgUrl'] + "'," +
            "'" + oneNew['description'] + "'," +
            "'" + new Date().Format("yyyy-MM-dd hh:mm:ss") + "'," +
            "'" + oneNew['category'] + "')";
        console.log(sql);
        connection.query(sql, function (err, results) {
            if (err) {
                callback(true);
                return;
            }
            callback(false, results);
        });
        connection.release();
    });
};

module.exports = News;