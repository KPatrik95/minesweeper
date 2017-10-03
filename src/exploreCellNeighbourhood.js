function exploreCellNeighbourhood(mineField, visibleField, x,y)
{
    for(var i=-1;i<2;i++) {
        for(var j=-1;j<2;j++) {

            if(x+i < 0) continue;
            if(x+i >= visibleField.length) continue;
            if(y+j < 0) continue;
            if(y+j >= visibleField[x+i].length) continue;

            if(!visibleField[x+i][y+j]) {
                exploreCell(mineField, visibleField, x+i, y+j);
            }

        }
    }
}