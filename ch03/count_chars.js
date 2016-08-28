/**
 * Created by larry on 8/28/16.
 */

function countBs(aString) {
    return countChar(aString, 'B');
}

console.log("B's in 'BBB' ", countBs('BBB'));
console.log("B's in 'bbbB' ", countBs('bbbB'));
console.log("B's in 'bbbb' ", countBs('bbbb'));

function countChar(inText, toCount) {
    var result = 0;
    for (var i = 0; i < inText.length; i++) {
        if (inText.charAt(i) === toCount) {
            result++;
        }
    }
    return result;
}

console.log("z's in 'zzz' ", countChar('zzz', 'z'));
console.log("Q's in 'qqQ' ", countChar('qqQ', 'Q'));
console.log("a's in 'AAA' ", countChar('AAA', 'a'));