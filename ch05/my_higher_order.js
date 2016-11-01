/*
 * My filter function.
 */
function filter(array, test) {
	var result = [];
	for (var i in array) {
		if (test(array[i])) {
			result.push(array[i]);
		}
	}
	return result;
}

var filterTests = [
	{ expr: 'filter([], function(_) { return true; })', result: [] },
	{ expr: 'filter([2], function(i) { return (i % 2 == 0); })', result: [2] },
	{ expr: 'filter([2], function(i) { return (i % 2 != 0); })', result: [] },
	{ expr: 'filter([2, 3, 5, 7], function(i) { return (i % 2 != 0); })', result: [3, 5, 7] },
	{ expr: 'filter([2, 3, 5, 7], function(i) { return (i % 2 != 0); })', result: [3, 5, 7] },
];
testExpressions(filterTests);
