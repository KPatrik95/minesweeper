function countNeighbourhood(mineField) {
    var a;
    for (var i = 0; i < mineField.length; i++)
    {
        a = mineField.length;
        for (var j = 0; j < mineField[i].length; j++)
        {
            if(mineField[i][j]!==-1) {
                if (i - 1 >= 0 && j - 1 >= 0 && mineField[i - 1][j - 1] === -1) {
                    mineField[i][j]++;
                }
                if (i - 1>=0 && mineField[i - 1][j] === -1) {
                    mineField[i][j]++;
                }
                if (i - 1>=0&&j + 1<mineField[i-1].length && mineField[i - 1][j + 1] === -1) {
                    mineField[i][j]++;
                }
                if (j - 1>=0 && mineField[i][j - 1] === -1) {
                    mineField[i][j]++;
                }
                if (j + 1<mineField[i].length && mineField[i][j + 1] === -1) {
                    mineField[i][j]++;
                }
                if (i + 1<a && mineField[i + 1][j] === -1) {
                    mineField[i][j]++;
                }
                if (i + 1<a&&j - 1>=0 && mineField[i + 1][j - 1] === -1) {
                    mineField[i][j]++;
                }
                if (i + 1<a&&j + 1<mineField[i+1].length && mineField[i + 1][j + 1] === -1) {
                    mineField[i][j]++;
                }
            }
        }
    }
    return mineField;
}

exports.countNeighbourhood=countNeighbourhood;