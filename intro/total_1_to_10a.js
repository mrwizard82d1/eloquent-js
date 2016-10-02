// Expect 55
console.log(sum(range(1, 10)));

function sum(a) {
	var result = 0;
	for (var i = 0; i < a.length; i++) {
		result += a[i];
	}
	return result;
};

function range(start, finish) {
	result = [];
	for (var i = start; i <= finish; i++) {
		result.push(i);
	}
	return result;
}

