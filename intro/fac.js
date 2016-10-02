function fac(n) {
	if (n == 0 || n == 1) {
		return 1;
	}
	else {
		return n * fac(n - 1);
	}
}

// Should be 3628800
console.log(fac(10));
