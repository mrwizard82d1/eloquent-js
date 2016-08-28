/**
 * Created by larry on 8/28/16.
 */

var size = 8;
for (var rank = 0; rank < size; rank++) {
    var rankDisplay = '';
    for (var file = 0; file < size; file++) {
       if (rank % 2 == 0 && file % 2 == 0) {
          rankDisplay += '#';
       }
       else if (rank % 2 == 0) {
           rankDisplay += ' ';
       } else if (rank % 2 == 1 && file % 2 == 0) {
           rankDisplay += ' ';
       } else {
           rankDisplay += '#';
       }
    }
    console.log(rankDisplay);
}
