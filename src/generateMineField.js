function generateMineField(x,y,width, height, mineCount){

    var M = new Array(width);
    for (var i = 0; i < width; i++) {
        M[i] = new Array(height);
    }
    for(var i=0; i<width; i++)
    {
        for(var j=0; j<height;j++)
        {
            M[i][j]=0;
        }
    }
    var currentMines=0;
    while(currentMines<mineCount)
    {
        var i=Math.floor((Math.random()*width));
        var j=Math.floor((Math.random()*height));
        if(M[i][j]==0 && i!=x && j!=y)
        {
            M[i][j]=-1;
            currentMines++;
        }
    }
    ingame=true;
    return M;
}
exports.generateMineField=generateMineField;