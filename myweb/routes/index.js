var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var conn = require('../sql/conn.js');

/* GET home page. */
// var data_;
// conn.selectAll(function(data){
//     data_ = data;
// });

router.get('/', function(req, res, next){ //此处为‘/’打开网页地址默认为app.js里面写的app.use('/index', index);地址
    res.render('index', {title: '主页'});
    // conn.select_try(function(data){
    //     res.render('index', {title: '主页',news_list: data});
    // })
});
// router.get('/try', function(req, res, next){
//     res.render('try', {title: 'try'});
// });

// router.get('/', function(req, res, next){
//     res.render('index', {val: data_});
// });

router.post('/',function(req, res){
    conn.select_try(function(data1){
        res.send(data1);
    })

})






module.exports = router;