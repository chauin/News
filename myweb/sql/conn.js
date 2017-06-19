// 方法
var mongo = require("mongodb");
var server = mongo.Server("localhost",27017,{auto_reconnect:true});
var db = new mongo.Db("test",server,{safe:true});

function selectAll(fun){  //全部查询
	db.open(function(err, db){
		db.collection("user", function(err, collection){
			collection.find({}).toArray(function(err, docs){
                fun(docs);
                db.close();
			});
		});
	});	
}

function select(att, fun){  //全部查询
	db.open(function(err, db){
		db.collection("user", function(err, collection){
			collection.find(att).toArray(function(err, docs){
				console.log('success');
                fun(docs);
                db.close();
			});
		});
	});	
}

function select_try(fun){  //全部查询
	db.open(function(err, db){
		db.collection("news", function(err, collection){  //此处news为mongodb数据库里集合(表)的名字
			collection.find({}).toArray(function(err, docs){
				console.log('success');
                fun(docs);
                db.close();
			});
		});
	});	
}


function select_deta(fun){  //全部查询
	db.open(function(err, db){
		db.collection("deta", function(err, collection){
			collection.find({}).toArray(function(err, docs){
				console.log('success');
                fun(docs);
                db.close();
			});
		});
	});	
}

function insert(data, fun){  //增加一条数据
	db.open(function(err, db){
		db.collection("user", function(err, collection){
			collection.insert(data, function(err, result){
				console.log('success');
                fun(result);
                db.close();
			});
		});
	});	
}

function del(data, fun){  //删除一条数据
	db.open(function(err, db){
		db.collection("user", function(err, collection){
			collection.remove(data, function(err, result){
				console.log('success');
                fun(result);
                db.close();
			})
		});
	});	
}

function update(data1, data2, fun){  //修改
  db.open(function(err, db) {
    db.collection("user", function(err, collection) {
      collection.update(data1, data2, function(err, result){
        db.close();
                fun(result);
      })
    });
  });  
};

exports.selectAll = selectAll;
exports.select = select;
exports.insert = insert;
exports.del = del;
exports.update = update;
exports.select_try = select_try;
exports.select_deta = select_deta;


//function select(att){  //根据条件查询
//	db.open(function(err, db){
//		db.collection("user", function(err, collection){
//			collection.find(att).toArray(function(err, docs){
//			   console.log(docs);
//			   db.close();
//			});
//		});
//	});	
//}
//
//
//function insert(data){  //增加一条数据
//	db.open(function(err, db){
//		db.collection("user", function(err, collection){
//			collection.insert(data, function(err, result){
//				console.log('success')
//			})
//		});
//	});	
//}
//
//
//
//function del(data){  //删除一条数据
//	db.open(function(err, db){
//		db.collection("user", function(err, collection){
//			collection.remove(data, function(err, result){
//				console.log('success')
//			})
//		});
//	});	
//}

