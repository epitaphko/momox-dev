var fs = require('fs');

try {
fs.readFile('README.txt','utf8',function(error,data){
	console.log("step-1");
	if(error) {
		throw error;
		console.log(".......Throw error!!!");
		return;
	}
	console.log(data);
});
} catch (error) {
	console.error('Caught the error synchronously');
}