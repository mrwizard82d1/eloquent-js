function range(lower, upper) {
    var result = new Array(upper - lower + 1);
    for (var i = 0; i < upper - lower + 1; i++) {
        result[i] = i + lower;
    }
    return result;
}

function sum(aRange) {
    var result = 0;
    for (var i in aRange) {
        result += aRange[i];
    }
    return result;
}

console.log(sum(range(1, 10)));
