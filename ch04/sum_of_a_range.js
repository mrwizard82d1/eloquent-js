/**
 * Created by larry on 8/30/16.
 */

function range(start, end) {
    var result = [];
    for (var i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

var range0To0 = range(0, 0);
console.log("range(0, 0) is [0]? ", (range0To0.length == 1 && range0To0[0] == 0));
var range0To1 = range(0, 1);
console.log("range(0, 1) is [0, 1]? ", (range0To1.length == 2 && range0To1[0] == 0 && range0To1[1] == 1));
var range1To4 = range(1, 4);
console.log("range(1, 4) is [1, 2, 3, 4]? ",
    (range1To4.length == 4 && range1To4[0] == 1 && range1To4[1] == 2 && range1To4[2] == 3 && range1To4[3] == 4));
console.log("range(0, -1) is empty? ", (range(0, -1).length == 0));

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