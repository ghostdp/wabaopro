// JavaScript Document

var express = require('express');
var router = express.Router();

var Map = require('../models/map');

router.get('/',function(req,res){
	//res.send('1');
	res.render('index',{});
});	

router.get('/gamePlay',function(req,res){
	//res.send('2');
	Map.find().then(function(maps){
		//console.log(maps);
		res.render('game_play',{
			maps : maps
		});
	});
	
});

router.get('/gameInfo',function(req,res){
	//res.send('3');
	res.render('game_info',{});
});

module.exports = router;