var fs = require('fs');
var fileName = './temp/README.txt';

function readCallback(error,data) {
	if(error){
		return console.error(error);
	}
	console.log(data);
}

function statCallback(error, stats) {
	if(error) {
		return console.error(error);
	} else if(!stats.isFile()) {
		return console.error('Not a file');
	}
	fs.readFile(fileName,'utf8',readCallback);
}

function existCallback(exists) {
	if(!exists) {
		return console.error('File does not exist');
	}
	fs.stat(fileName,statCallback);
}

fs.exists(fileName,existCallback);

/*
fs.exists(fileName,function(exists){
	if(!exists) {
		return console.error('File does not exist');
	}
	fs.stat(fileName,function(error,stats){
		if(error) {
			return console.error(error);
		} else if(!stats.isFile()) {
			return console.error('Not a file');
		} // error cases
		fs.readFile(fileName,'utf8',function(error,data){
			if(error){
				return console.error(error);
			}
			console.log(data);
		}) //fs.readFile
	}); // fs.stat
}); //fs.exists
*/