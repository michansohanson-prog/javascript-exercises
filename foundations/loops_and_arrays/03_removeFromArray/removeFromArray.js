function removeFromArray(array, ...args) {
	let length = array.length;
	let argLength = args.length;
	for (let i = 0; i < length; i++) {
		for (let x = 0; x < argLength; x++) {
			if (args[x] === array[i]) {
				array.splice(i, 1);
				length--;
				i = 0;
				x--;
			}
		}
	}
	return array;
}

// === CLEANER SOLUTION
// function removeFromArray(array, ...args) {
//   return array.filter(item => !args.includes(item));
// }
// removeFromArray([1, 2, 2, 4, 5], 6, 7, 2);

// function takes two parameters: array and ...args
// determine length of array and args
// check index i against all values of args
// if a any value of args = the index of i, then splice the array.

// Do not edit below this line
module.exports = removeFromArray;
