// JavaScript Document

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var index = require('./routers/index');
var api = require('./routers/api');
var testData = require('./routers/testData');

app.set('views','./views');
app.set('view engine','ejs');

app.use(express.static('public'));

app.use('/',index);
app.use('/api',api);
app.use('/testData',testData);

mongoose.connect('mongodb://localhost:27017/wabao',function(err){
	if(err){
		console.log('连接失败');
	}
	else{
		console.log('连接成功');
		app.listen(8081);
	}
});

