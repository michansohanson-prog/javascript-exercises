const palindromes = function (word) {
	const arr = word
		.toLowerCase()
		.replace(/[^a-z0-9]/g, "")
		.split("");
	for (let i = 0; i < Math.floor(arr.length) / 2; i++) {
		if (i % 2 === 0) {
			if (arr[i] !== arr.at(i + 1 - (i + 1) - (i + 1))) {
				console.log("ERROR");
				return false;
			}
		}
	}
	return true;
};

// Do not edit below this line
module.exports = palindromes;
