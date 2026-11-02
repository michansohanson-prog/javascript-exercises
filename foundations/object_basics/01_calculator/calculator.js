// function declarations
function add(a, b) {
	return a + b;
}

// function expression
const subtract = function (a, b) {
	return a - b;
};

//arrow function
const sum = (a) => a.reduce((acc, cur) => acc + cur, 0);
//shorthand
const multiply = (a) => a.reduce((acc, sum) => acc * sum, 1);

//arrow function shorthand
const power = (a, b) => a ** b;

const factorial = (a) => {
	const array = [];
	for (let i = 1; i <= a; i++) {
		array.push(i);
	}
	return array.reduce((acc, cur) => acc * cur, 1);
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
