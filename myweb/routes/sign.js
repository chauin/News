var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var conn = require('../sql/conn.js');

router.get('/', function(req, res, next){  //此处路由地址为‘/’因为app.js里面已写
    res.render('sign', {title: '注册'});
});

router.post('/', function(req, res){ //对同一个页面的请求，只能选择使用哪个模块
    var name = req.body.name; //向服务器请求js.js文件里面的'name': val;
    var pwd = req.body.pwd; //向服务器请求js.js文件里面的'pwd': pwd;
    
    if(req.body.style == 'select_'){
        conn.select({'username':name}, function(data){
            console.log(data);
        if(data.length > 0){ 
                res.send('a');
            }else{
                res.send('b');
                
            }
        })    
    }else if(req.body.style == 'insert_'){

        conn.insert({'username':name,'userpwd':pwd},function(data){
            if(data.result.ok == 1){
                res.send('true');
            }else{
                res.send('false');
            }
        })
    }
          
});

module.exports = router;