const sumAll = function (input1, input2) {
	let total = 0;
	let high;
	let low;

	if (
		input1 - Math.floor(input1) !== 0 ||
		input2 - Math.floor(input2) !== 0 ||
		input1 < 0 ||
		input2 < 0 ||
		typeof input1 === "string" ||
		typeof input2 === "string"
	) {
		return "ERROR";
	}
	if (input1 > input2) {
		high = input1;
		low = input2;
	} else {
		low = input1;
		high = input2;
	}
	for (let i = 0; i <= high - low; i++) {
		total += low + i;
	}
	return total;
};

sumAll(4, 1);
// Do not edit below this line
module.exports = sumAll;

// define two numbers
// ensure they are non-negative integers, else return ERROR
// swap places if the arg1 > arg2
// define a new blank var
// add the sum of each number (inclusive)
