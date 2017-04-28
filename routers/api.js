// JavaScript Document

var express = require('express');
var User = require('../models/user');
var router = express.Router();

var responseData = {};

router.use(function(req,res,next){
	responseData = {
		code : 0,
		message : ''
	};
	next();
});

router.post('/reg',function(req,res){
	//console.log('hello reg');
	var username = req.body.username;
	var password = req.body.password;
	var repassword = req.body.repassword;
	
	if(username == ''){
		responseData.code = 1;
		responseData.message = '用户名为空';
		res.json(responseData);
		return;
	}
	
	User.findOne({
		
		username : username
		
	}).then(function(userInfo){
		if(userInfo){
			console.log(111);
		}
		else{
			console.log(222);
		}
	});
	
});


router.post('/login',function(req,res,next){
	//console.log('hello reg');
	
	
	var username = req.body.username;
	var password = req.body.password;
	
	if(username == ''){
		responseData.code = 1;
		responseData.message = '用户名为空';
		res.json(responseData);
		return;
	}
	
	User.findOne({
		username : username,
		password : password
	}).then(function(userInfo){
		if(userInfo){
			console.log(333);
			//console.log(res.redirect);
			//res.redirect('/list'); //ajax方式需要在前端跳转
			responseData.code = 1;
			responseData.message = '登录成功';
			/*responseData.userInfo = {
				_id : userInfo._id,
				username : userInfo.username
			};*/
			var date = new Date();
			date.setDate(date.getDate()+5);
			req.cookies.set('userInfo',JSON.stringify({
				_id : userInfo._id,
				username : userInfo.username
			}),{
				expires : date
			});
			res.json(responseData);
		}
		else{
			console.log(444);
		}
	});
	
});
router.get('/list',function(req,res){
	res.send(123);
});

module.exports = router;









