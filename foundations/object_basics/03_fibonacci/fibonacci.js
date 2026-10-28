const fibonacci = function (input) {
	let fibArray = [1, 1];
	if (typeof input !== "number") {
		return "OOPS";
	}
	if (Number.isNaN(input)) {
		return "OOPS";
	}
	if (input <= 0) {
		return "OOPS";
	}
	if (input === 1) {
		return 1;
	}
	if (input === 2) {
		return 1;
	}
	for (let i = 2; i < input; i++) {
		fibArray.push(fibArray.at(-2) + fibArray.at(-1));
	}
	return fibArray.at(-1);
};

// Do not edit below this line
module.exports = fibonacci;

// Input # = index of (fibArray - 1)
// if Input # is NaN, <=0, or not a number type at all, return "OOPS"
// create fibArray to input # of indices
// calculate each value based on index#
