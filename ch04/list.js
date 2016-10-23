/**
 * Creates a new list whose head is `value` and whose tail is `aList`.
 */
function prepend(value, aList) {
	return {value: value, rest: aList};
}

/**
 * Converts `anArray` to a list.
 */
function arrayToList(anArray) {
	if (anArray.length == 0) {
		return null;
	}
	else {
		return prepend(anArray[0], arrayToList(anArray.slice(1)));
	}
}

/**
 * Get the nth item of `aList`.
 */
function nth(n, aList) {
	if (aList == null) {
		return aList;
	}
	else if (n == 0) {
		return aList.value;
	}
	else {
		return nth(n - 1, aList.rest);
	}
}
