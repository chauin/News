var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var conn = require('../sql/conn.js');

router.get('/', function(req, res, next){  //此处‘/’代表该网页地址默认为app.js里面的app.use('/log', log)写的地址
    res.render('findpwd', {title: '密码找回'});
});

router.post('/',function(req,res){
    var name = req.body.name;
    var pwd = req.body.pwd;

    if(req.body.style == 'find_'){
        conn.select({'username':name}, function(data){
        if(data.length > 0){ 
            res.send('a');
        }else{
            res.send('b');               
        }
        })    
    }
    else if(req.body.style == 'change_'){
        conn.update({'username':name},{'username':name,'userpwd':pwd},function(data){
            console.log(data);
        if(data.result.n == 1){
            res.send('t');
        }else{
            res.send('f');
        }
        })
    } 
})

module.exports = router;