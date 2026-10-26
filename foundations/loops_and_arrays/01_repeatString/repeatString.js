const repeatString = function (string, num) {
	if (num < 0) return "ERROR";
	let rep = "";
	for (let i = 0; i < num; i++) {
		rep += string;
	}
	return rep;
};

// Do not edit below this line
module.exports = repeatString;
