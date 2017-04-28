// JavaScript Document

var express = require('express');

var router = express.Router();

router.get('/',function(req,res){
	//res.send('1');
	res.render('index',{});
});	

router.get('/gamePlay',function(req,res){
	//res.send('2');
	res.render('game_play',{});
});

router.get('/gameInfo',function(req,res){
	//res.send('3');
	res.render('game_info',{});
});

module.exports = router;