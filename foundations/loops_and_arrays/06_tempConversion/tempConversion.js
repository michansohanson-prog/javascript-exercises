const convertToCelsius = function (fDeg) {
	let f2c = (fDeg - 32) * (5 / 9);
	let f2cInt = Math.floor(f2c);
	let f2cDec = f2c - f2cInt;
	let f2cDecRound = Math.round(f2cDec * 10) / 10;
	return f2cInt + f2cDecRound;
};
convertToCelsius(32);

const convertToFahrenheit = function (cDeg) {
	let c2f = (cDeg * 9) / 5 + 32;
	let c2fInt = Math.floor(c2f);
	let c2fDec = c2f - c2fInt;
	let c2fDecRound = Math.round(c2fDec * 10) / 10;
	return c2fInt + c2fDecRound;
};
convertToFahrenheit(20);

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};

// C = (f - 32)*(5/9)

//give a number with x.yyyyy or xx.yyyyy; return x.y, rounded to y.
//remove the starting value and multiply * 10: y.yyyyyyyy
// round the result: y (rounded)
// divide by 10 = .y and add to original starting value.
