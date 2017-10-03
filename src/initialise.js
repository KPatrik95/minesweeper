var mineField = generateMineField(8, 8, 10);

var visibleField = [];
for(var i=0;i<8;i++){
    visibleField[i] = [];
    for(var j=0;j<8;j++) {
        visibleField[i][j] = false;
    }
}

mineField = countNeighbourhood(mineField);
console.log(mineField, visibleField);
