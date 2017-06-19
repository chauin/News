var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var conn = require('../sql/conn.js');

router.get('/', function(req, res, next){
    res.render('detailed', {title: '详细页'});
});

router.post('/',function(req, res){
    conn.select_deta(function(data){
        res.send(data);
        // console.log(data);
    })

})


module.exports = router;