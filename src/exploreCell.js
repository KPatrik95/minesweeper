function exploreCell(mineField, visibleField, x, y){
   if(visibleField[x][y]===false)
    {
        visibleField[x][y]=true;
        showCell(x, y);
    }

    if(mineField[x][y]===0)
    {
        exploreCellNeighbourhood(mineField,visibleField,x,y);

    }
}
exports.exploreCell=exploreCell;