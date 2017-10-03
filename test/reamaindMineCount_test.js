var expect=require('chai').expect;
var remaindMineCount = require('../src/remaindMineCount').remaindMineCount;

describe ("RemaindMineCount",function () {
    it("Teszt 1",function () {
        var result = remaindMineCount([
            [true, false, false],
            [false, true, false],
            [true, true, false]
        ]);

        var mineCount = 2;
        expect(result).to.be.equal(-2);

    });

});