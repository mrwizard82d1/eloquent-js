/**
 * Returns a new array whose items are the reverse of `anArray`.
 */
function reverseArray(anArray) {
	var result = [];
	for (var i = 0; i < anArray.length; i++) {
		result.unshift(anArray[i]);
	}
	return result;
}

/**
 * Reverses `anArray` in place.
 */
function reverseArrayInPlace(anArray) {
	for (var i = 0, j = anArray.length - 1; i < anArray.length / 2; i++, j--) {
		var temp = anArray[i];
		anArray[i] = anArray[j];
		anArray[j] = temp;
	}
}

