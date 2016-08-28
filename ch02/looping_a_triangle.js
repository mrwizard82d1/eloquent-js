/**
 * Created by larry on 8/28/16.
 */

for (var count = 1; count <= 7; count++) {
    var toWrite = '';
    while (toWrite.length != count) {
        toWrite += '#';
    }
    console.log(toWrite);
}