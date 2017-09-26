var expect=require('chai').expect;
var generateMineField=require('../src/generateMineField').generateMineField;

function sum(M,width,height)
{
    var osszeg=0;
    for(var i=0; i<width; i++)
    {
        for(var j=0; j<height;j++)
        {
            osszeg+=M[i][j];
        }
    }
    return osszeg;
}

describe("generateMines", function() {
    it("10x10, 10 mines", function() {
        var result=generateMineField(10,10,10);
        result =sum(result, 10,10);
        expect(result).to.be.equal(-10);
    });
    it("10x10, 30 mines", function() {
        var result=generateMineField(10,10,30);
        result =sum(result, 10,10);
        expect(result).to.be.equal(-30);
    });
    it("20x10, 30 mines", function() {
        var result=generateMineField(20,10,30);
        result =sum(result, 20,10);
        expect(result).to.be.equal(-30);
    });
});