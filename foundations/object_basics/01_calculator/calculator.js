const add = function (x, y) {
	return x + y;
};
add(2, 5);

const subtract = function (x, y) {
	return x - y;
};
subtract(10, 5);

const sum = function (x) {
	return x.reduce((acc, cur) => acc + cur, 0);
};

const multiply = function (x) {
	return x.reduce((acc, cur) => acc * cur, 1);
};

const power = function (x, y) {
	return x ** y;
};

const factorial = function (x) {
	for (let i = x - 1; i > 1; i--) {
		x = x * i;
	}
	if (x === 0) {
		return 1;
	}
	return x;
};
// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
