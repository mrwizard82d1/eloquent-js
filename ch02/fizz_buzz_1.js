/**
 * Created by larry on 8/28/16.
 */

for(var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 != 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
