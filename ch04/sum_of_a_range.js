/**
 * Created by larry on 8/30/16.
 */

function range(start, end) {
    var step = 1;
    if (arguments.length > 2) {
        step = arguments[2];
    }
    var result = [];
    for (var i = start; (step >= 0 ? i <= end : i >= end); i += step) {
        result.push(i);
    }
    return result;
}

function equalArrays(left, right) {
    var result = false;

    if (left.length != right.length) {
        return result;
    }

    // Assume they are equal
    result = true;
    for (var i = 0; i < left.length; i++) {
        if (left[i] != right[i]) {
            // And prove they are **not**
            result = false;
            break;
        }
    }
    return result;
}

console.log("range(0, 0) is [0]? ", equalArrays(range(0, 0), [0]));
console.log("range(0, 1) is [0, 1]? ", equalArrays(range(0, 1), [0, 1]));
console.log("range(1, 4) is [1, 2, 3, 4]? ", equalArrays(range(1, 4), [1, 2, 3, 4]));
console.log("range(0, -1) is empty? ", equalArrays(range(0, -1), []));
console.log("range(1, 10, 2) is [1, 3, 5, 7, 9]? ", equalArrays(range(1, 10, 2), [1, 3, 5, 7, 9]));
console.log("range(5, 2, -1 is [5, 4, 3, 2]? ", equalArrays(range(5, 2, -1), [5, 4, 3, 2]));
console.log("range(0, 1, -1) is empty? ", equalArrays(range(0, 1, -1), []));
console.log();

function sum(anArray) {
    var total = 0;
    for (var i = 0; i < anArray.length; i++) {
        total += anArray[i];
    }
    return total;
}

console.log("sum([]) is 0? ", (sum([]) == 0));
console.log("sum([7]) is 7? ", (sum([7]) == 7));
console.log("sum([3, 4, 5]) is 12? ", (sum([3, 4, 5]) == 12));
console.log("sum(range(1, 10)) is 55?", (sum(range(1, 10)) == 55));