var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var conn = require('../sql/conn.js');

router.get('/', function(req, res, next){ //该网页内容position在网页左边
    res.render('seach', {title: '搜索页'});
});

module.exports = router;