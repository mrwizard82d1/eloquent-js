function fac(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * fac(n - 1);
    }
}

console.log("fac(0)");
console.log(fac(0));

console.log("\nfac(5)");
console.log(fac(5));

console.log("\nfac(10)");
console.log(fac(10));
