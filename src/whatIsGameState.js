function whatIsGameState(mineField, visibleField) {
    for (var i = 0; i < mineField.length; i++) {
        for (var j = 0; j < mineField[i].length; j++) {
            if (mineField[i][j] == -1 && visibleField[i][j]) {
                return -1;
                continue;
            }
            if (mineField[i][j] != -1 && !visibleField[i][j]) {
                return 0;
                continue;
            }
            // return mineField[i][j] == -1 && visibleField[i][j] ? -1 : mineField[i][j] != -1 && !visibleField[i][j] ? 0 : 1;
        }
    }
    return 1;
}