// JavaScript Document

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var map = new Schema({
	isChecked : Boolean
});

module.exports = map;