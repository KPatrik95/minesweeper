function generateMineField(width, height, mineCount){

    var M;
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
        var i=Math.floor((Math.random()*width)+1);
        var j=Math.floor((Math.random()*height)+1);
        if(M[i,j]==0)
        {
            M[i,j]=-1;
            currentMines++;
        }
    }
}
