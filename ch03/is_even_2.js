/**
 * Created by larry on 8/28/16.
 */


function isEven(n) {
    if (n < 0) {
        return isEven(-n);
    }
    else if (n == 0) {
       return true;
    }
    else if (n == 1) {
        return false;
    }
    else {
        return isEven(n - 2);
    }
}

console.log('0 is even? ', isEven(0));
console.log('1 is even?', isEven(1));
console.log('7 is even?', isEven(7));
console.log('10 is even?', isEven(10));
console.log('50 is even?', isEven(50));
console.log('75 is even?', isEven(75));
console.log('-1 is even?', isEven(-1));
console.log('-2 is even?', isEven(-2));

