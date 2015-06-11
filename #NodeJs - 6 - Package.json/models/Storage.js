'use strict';

function Storage(){
	this.albuns = {};
};

Storage.prototype.add = function(obj){
	this.albuns[obj.nome] = obj;
};

Storage.prototype.del = function(nome){
	delete this.albuns[nome]
};

Storage.prototype.get = function(nome){
	return this.albuns[nome];
};

Storage.prototype.getAll = function(){
	return this.albuns;
}


module.exports = new Storage();
