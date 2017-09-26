function countNeighbourhood(n) {
    var a;
    for (var i = 0; i < n.length; i++)
    {
        a = n.length;
        for (var j = 0; j < n[i].length; j++)
        {
            if(n[i][j]!==-1) {
                if (i - 1 >= 0 && j - 1 >= 0 && n[i - 1][j - 1] === -1) {
                    n[i][j]++;
                }
                if (i - 1>=0 && n[i - 1][j] === -1) {
                    n[i][j]++;
                }
                if (i - 1>=0&&j + 1<n[i-1].length && n[i - 1][j + 1] === -1) {
                    n[i][j]++;
                }
                if (j - 1>=0 && n[i][j - 1] === -1) {
                    n[i][j]++;
                }
                if (j + 1<n[i].length && n[i][j + 1] === -1) {
                    n[i][j]++;
                }
                if (i + 1<a && n[i + 1][j] === -1) {
                    n[i][j]++;
                }
                if (i + 1<a&&j - 1>=0 && n[i + 1][j - 1] === -1) {
                    n[i][j]++;
                }
                if (i + 1<a&&j + 1<n[i+1].length && n[i + 1][j + 1] === -1) {
                    n[i][j]++;
                }
            }
        }
    }
    return n;
}

exports.countNeighbourhood=countNeighbourhood;