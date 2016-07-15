
exports.add = add;
exports.multiply = multiply;
exports.factorial = factorial;
exports.now = Date.now();

function add(n1,n2) {
	return parseInt(n1,10) + parseInt(n2,10);
}
function multiply(n1,n2) {
	return parseInt(n1,10) * parseInt(n2,10);
}
function factorial(n) {
	if(n == 0) {
		return 1;
	} else {
		return n*factorial(n-1);
	}
}
