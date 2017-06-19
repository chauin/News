var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var conn = require('../sql/conn.js');

router.get('/', function(req, res, next){
    res.render('log', {title: '登录'});
});

router.post('/', function(req, res){
    var name = req.body.name; //向服务器请求js.js文件里面的'name': val;
    var pwd = req.body.pwd; //向服务器请求js.js文件里面的'pwd': pwd;
    
    conn.select({'username': name, 'userpwd': pwd}, function(data){
    		console.log(data);
        if(data.length > 0){ //data.length大于0的时候说明数据库里有相同的
                res.send('true');
            }else {
                res.send('false');
            }
        // res.send(data);
    })
});

module.exports = router;