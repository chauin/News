var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var conn = require('../sql/conn.js');

router.get('/', function(req, res, next){
    res.render('mine', {title: '个人页'});
});

module.exports = router;