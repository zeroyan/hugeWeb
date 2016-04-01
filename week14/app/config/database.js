/**
 * Created by zeroyan on 16/2/22.
 */
var mysql = require('mysql');
var config = require('../config/config');

var pool = mysql.createPool(config.mysql_dev);

exports.pool = pool;