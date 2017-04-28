// JavaScript Document

var express = require('express');
var app = express();
var index = require('./routers/index');

app.set('views','./views');
app.set('view engine','ejs');

app.use(express.static('public'));

app.use('/',index);

app.listen(8081);