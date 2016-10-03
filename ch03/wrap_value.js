function wrapValue(n) {
	var localValue = n;
	return function() { 
		return localValue;
	};
};

var wrap1 = wrapValue(1);
console.log(wrap1());

var wrap2 = wrapValue(2);
console.log(wrap2());

