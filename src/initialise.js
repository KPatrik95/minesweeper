

    var mineField=[];
    var visibleField = [];
    function initialize(x,y,width,height, mines) {
        mineField=generateMineField(x,y,width, height, mines);

    for (var i = 0; i < width; i++) {
        visibleField[i] = [];
        for (var j = 0; j < height; j++) {
            visibleField[i][j] = false;
        }
    }
    mineField = countNeighbourhood(mineField);
    console.log(mineField, visibleField);
}