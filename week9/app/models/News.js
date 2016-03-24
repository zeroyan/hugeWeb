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
    }
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
        (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)if (new RegExp("(" + k + ")").test(format))
        format = format.replace(RegExp.$1,
            RegExp.$1.length == 1 ? o[k] :
                ("00" + o[k]).substr(("" + o[k]).length));
    return format;
};

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