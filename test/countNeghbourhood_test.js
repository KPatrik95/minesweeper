var expect=require('chai').expect;
var countNeighbourhood=require("../src/countNeighbourhood").countNeighbourhood;

describe("MsTest",function () {
    it("2by2",function () {
        var result=countNeighbourhood([[0,-1],[0,0]]);
        expect(result).to.be.deep.equal([[1,-1],[1,1]]);
    });
    it("[]",function () {
        var result=countNeighbourhood([]);
        expect(result).to.be.deep.equal([]);
    });
    it("large",function () {
        var result=countNeighbourhood([[0,-1,0,-1],[0,0,0,0],[-1,-1,-1,-1],[-1,0,0,-1]]);
        expect(result).to.be.deep.equal([[1,-1,2,-1],[3,4,5,3],[-1,-1,-1,-1],[-1,4,4,-1]]);
    });it("bombs",function () {
        var result=countNeighbourhood([[-1,-1],[-1,-1]]);
        expect(result).to.be.deep.equal([[-1,-1],[-1,-1]]);
    });
    it("3by1",function () {
        var result=countNeighbourhood([[0,-1,0]]);
        expect(result).to.be.deep.equal([[1,-1,1]]);
    });
    it("1by3",function () {
        var result=countNeighbourhood([[0],[-1],[0]]);
        expect(result).to.be.deep.equal([[1],[-1],[1]]);
    });
    it("2by4",function () {
        var result=countNeighbourhood([[-1,0,0,0],[-1,0,0,-1]]);
        expect(result).to.be.deep.equal([[-1,2,1,1],[-1,2,1,-1]]);
    });
    it("3byvarious",function () {
        var result=countNeighbourhood([[0,-1,0],[0],[-1,0]]);
        expect(result).to.be.deep.equal([[1,-1,1],[2],[-1,1]]);
    });
} );