/**
 * Created by larry on 8/28/16.
 */

function min(x, y) {
    return (x < y ? x : y);
}

console.log('min(3, 5) returns 3? ', (min(3, 5) == 3));
console.log('min(-3, -5) returns -5? ', (min(-3, -5) == -5));
console.log('min(7, 7) returns 7? ', (min(7, 7) == 7));
