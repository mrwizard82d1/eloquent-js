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

function testExpressions(testExpressions) {
	var results = testExpressions.map(function(testExpression) {
		var actual = eval(testExpression.expr);
		return { toPrint: 'deepEqual( ' + testExpression.expr + ', ' + testExpression.result + ' ): ',
			actual: actual,
			pass: deepEqual(actual, testExpression.result) };
	});

	var testResults = results.map(function(result) {
		return result.toPrint + ' : ' + result.pass + (result.pass ? '' : '(was ' + result.actual + ')');
	});

	var summary = results.reduce(function(soFar, result) {
		if (result.pass) {
			return {pass: soFar.pass + 1, fail: soFar.fail};
		}
		else {
			return {pass: soFar.pass, fail: soFar.fail + 1};
		}
	}, {pass: 0, fail: 0});

	var banner = (summary.fail ? 
		'\n*************** FAILED! ****************\n' : 
		'\n****************************************\n')
	console.log(banner);
	testResults.forEach(function(result) {
		console.log(result);
	});
	console.log(banner);
};

