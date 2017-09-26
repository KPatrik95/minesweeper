function whatIsGameState(mineField, visibleField) {
    var value = 1;
    for (var i = 0; i < mineField.length; i++) {
        for (var j = 0; j < mineField[i].length; j++) {
            if (mineField[i][j] == -1 && visibleField[i][j]) {
                return -1;
                continue;
            }
            if (mineField[i][j] != -1 && !visibleField[i][j]) {
                value = 0;
                continue;
            }
        }
    }
    return value;
}
exports.whatIsGameState=whatIsGameState;