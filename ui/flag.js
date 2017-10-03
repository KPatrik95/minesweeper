//it's a flag. thaaanksss


var flagField = [];
for(var i=0;i<8;i++){
    flagField[i] = [];
    for(var j=0;j<8;j++) {
        flagField[i][j] = false;
    }
}
function putFlag(visibleField ,i,j) {
    if (!visibleField[i][j]) {
        flagField[i] = true;
    }
}

function flagFieldCount(flagField) {
    var count = 0;
    for (var i = 0; i < flagField.length; i++) {
        for (var j = 0; j < flagField[i].length; j++) {
            if (flagField[i][j]) {
                count = count + 1;
            }
        }
    }
    return count;
}
exports.flagFieldCount=flagFieldCount;

















