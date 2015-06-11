'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function(){
	
	var AlbumSchema = new Schema({
		nome : String,
		ano : Number
	});

	mongoose.model('Album', AlbumSchema);
};


