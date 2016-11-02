module.exports = function() {
	/*
	 * My filter function.
	 */
	this.filter = function(array, test) {
		var result = [];
		for (var i in array) {
			if (test(array[i])) {
				result.push(array[i]);
			}
		}
		return result;
	}
};
