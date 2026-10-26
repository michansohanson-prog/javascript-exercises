const repeatString = function (string, num) {
	if (num < 0) {
		console.log("ERROR");
	} else {
		for (let x = 1; x < num; x++) {
			string += string;
		}
	}
	console.log(string);
};
repeatString("hi", 5);

// Do not edit below this line
module.exports = repeatString;
