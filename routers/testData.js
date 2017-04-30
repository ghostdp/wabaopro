// JavaScript Document

var express = require('express');
var router = express.Router();
var Map = require('../models/map');


router.get('/',function(req,res){  //数据测试接口
	
	res.render('testData',{});
	
});	

router.get('/initMapData',function(req,res,next){
	
	//res.send('123');
	
	/*Map.findOne(function(err,data){
		console.log(data);
	});*/
	
	Map.remove({}).then(function(){});
	for(var i=0;i<300;i++){
		new Map({
			isChecked : false
		}).save();
	}
	next();
	
});

module.exports = router;