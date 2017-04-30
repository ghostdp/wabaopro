// JavaScript Document

var mongoose = require('mongoose');

var mapsSchema = require('../schemas/maps');

module.exports = mongoose.model('Map',mapsSchema); //构造函数