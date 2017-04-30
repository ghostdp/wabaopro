// JavaScript Document

var express = require('express');
var router = express.Router();
var Map = require('../models/map');

var luckData = [
	{
		goodsName : '物品1',
		goodsChance : 0.5
	},
	{
		goodsName : '物品2',
		goodsChance : 10
	},
	{
		goodsName : '物品3',
		goodsChance : 11
	},
	{
		goodsName : '物品4',
		goodsChance : 12
	},
	{
		goodsName : '物品5',
		goodsChance : 13
	},
	{
		goodsName : '物品6',
		goodsChance : 14
	},
	{
		goodsName : '物品7',
		goodsChance : 15
	},
	{
		goodsName : '物品8',
		goodsChance : 24.5	
	}
];

var wcArr = winningChance(luckData);

router.get('/winning',function(req,res){  //抽奖接口
	
	var rm = Math.random();
	//console.log(wcArr);
	var wmObj = winningMessage(rm,wcArr);
	var map_id = req.query.map_id;
	Map.update({_id:map_id},{$set:{isChecked:true}},function(err){});			
	res.json(wmObj);
	
});	

function winningChance(data){
	var result = [];
	var num = 0;
	for(var i=0;i<data.length;i++){
		num = num + data[i].goodsChance;
		result.push(num/100);
	}
	return result;
}

function winningMessage(rm,arr){
	var num = 0;
	var wmObj = {
		code : 0,
		message : ''
	};
	for(var i=0;i<arr.length;i++){
		if(rm < arr[0]){
			num = 0;
		}
		else if(rm > arr[i] && rm < arr[i+1]){
			num = i+1;
		}
	}
	wmObj.message = luckData[num].goodsName;
	return wmObj;
}

module.exports = router;