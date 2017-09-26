var expect=require('chai').expect;
var exploreCell=require('../src/exploreCell').exploreCell;
describe("exploreCellTest",function() {
    it("CellTest",function(){
        var mineField = [[1,1,1],[1,1,1],[1,1,1]];
        var visibleField = [
            [true, false, false],
            [false, true, false],
            [true, true, false]
        ];
        var expectedVisibleField = [
            [true, true, false],
            [false, true, false],
            [true, true, false]
        ];

        var result=exploreCell(mineField, visibleField, 0, 1);
        expect(visibleField).to.be.deep.equal(expectedVisibleField);
    });
});