/**
 * Implement a deep equality "operator."
 */
function deepEqual(anObject, another) {
	// Different types are **not** deep equal
	if (typeof anObject != typeof another) {
		return false;
	}
	// `null` is only deep equal to itself
	else if (anObject == null || another == null) {
		return anObject === another;
	} 
	// Two instances that are not of type `object` are only equal if identical
	else if (typeof anObject != 'object' && typeof another != 'object') {
		return anObject === another;
	}
	// Two `object` instances are only equal if the have the same number of keys
	else if (Object.keys(anObject).length != Object.keys(another).length) {
		return false;
	}
	else {
		// Otherwise, `anObject` and `another` are both `object` instances with the same number of keys
		var anObjectKeys = Object.keys(anObject);
		var anotherKeys = Object.keys(another);
		var indexOfAnObjectKeyInAnotherKeys = anObjectKeys.map(function(anObjectKey) {
			return anotherKeys.indexOf(anObjectKey);
		})
		var areAllObjectKeysInAnotherKeys = indexOfAnObjectKeyInAnotherKeys.every(function(i) {
			return (i != -1);
		});
		// If all the keys in `anObject` are not in `another`, the objects are not deep equal
		if (! areAllObjectKeysInAnotherKeys) {
			return false;
		}

 		for (var i = 0; i < anObjectKeys.length; i++) {
 			// If two corresponding key values are not `deepEqual`, the objects are not deep equal
 			if (! deepEqual(anObject[anObjectKeys[i]], another[anObjectKeys[i]])) {
 				return false;
 			}
 		}

		// Otherwise, the objects **are** deep equal!
		return true;
	}
}

function testDeepEqual() {
	var printTestResult = function(argumentsText) {
		var exprText = "deepEqual(" + argumentsText + ")";
		console.log(exprText + ":", eval(exprText));
	};

	// Different types are not equal
	console.log('\nDifferent types are not equal.');
	["'3', 3", "'c', 3", "null, undefined", 
		"new Date(2016, 10, 22), '2016-10-22T06:00:00.000Z'"].forEach(printTestResult);

	// Same (primitive) types use `===`
	console.log('\nPrimitive types are equal using `===`.');
	["null, null", "undefined, undefined", "3, 3", "'ab', 'ab'"].forEach(printTestResult);

	// Same (primitive) types use `===` but are **not** equal
	console.log('\nPrimitive types using `===` but are **not** equal.');
	["3.0, 3", "3, 3.0", "'ab', 'ac'", "'ab', 'aB'"].forEach(printTestResult);

	// Objects are not `deepEqual` if they have different number of keys....
	console.log('\nObjects are not `deepEqual` if they have different number of keys...');
	["{a : 1}, {a: 1, b: 1}"].forEach(printTestResult);

	// Nor are they `deepEqual` if all the keys are **not** equal.
	console.log('\nNor are they `deepEqual` if all the keys are **not** equal.');
	["{2: 1}, {2.00001: 1}"].forEach(printTestResult);

	// Objects are not `deepEqual` if they have the same keys but values that are **not** `deepEqual`.
	console.log('\nNor are they `deepEqual` with equal keys but values that are **not** `deepEqual`.');
	["{a: 1, b: 2}, {a: 1, b: 2.00001}"].forEach(printTestResult);
	["{a: {b: {c: 1, d: 2}}}, {a: {b: {c: 1, d: 2.00001}}}"].forEach(printTestResult);

	// Objects are only deep equal if they have the same keys **and** corresponding values.
	console.log('\nObjects are only deep equal if they have the same keys **and** corresponding values.');
	["{a: 1, b: 2}, {a: 1, b: 2}"].forEach(printTestResult);
	["{a: {b: {c: 1, d: 2}}}, {a: {b: {c: 1, d: 2}}}"].forEach(printTestResult);
};
