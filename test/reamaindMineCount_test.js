var expect=require('chai').expect;
var remaindMineCount = require('../src/remaindMineCount').remaindMineCount;

describe ("RemaindMineCount",function () {
    it("RemaindMineCountTest1", function () {
        var result = remaindMineCount([
            [true, false, false],
            [false, true, false],
            [true, true, false]
        ], 2);
        expect(result).to.be.equal(-2);
    });

});