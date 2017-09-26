var expect = require('chai').expect;
var whatIsGameState = require('../src/whatIsGameState').whatIsGameState;


describe( "whatIsGameState" , function () {
    it("nyernél", function () {
        var resoult = whatIsGameState(
            [
                [1, 1, 1],
                [1, -1, 1],
                [1, 1, 1]
            ],
            [
                [true, true, true],
                [true, false, true],
                [true, true, true]
            ]);
        expect(resoult).to.be.equal(1);
    });
    it("bukó", function () {
        var resoult = whatIsGameState(
            [
                [1, 1, 1],
                [1, -1, 1],
                [1, 1, 1]
            ],
            [
                [true, true, true],
                [true, true, true],
                [true, true, true]
            ]);
        expect(resoult).to.be.equal(-1);
    });
    it("nyernél", function () {
        var resoult = whatIsGameState(
            [
                [1, 1, 1],
                [1, -1, 1],
                [1, 1, 1]
            ],
            [
                [true, true, true],
                [true, false, true],
                [true, false, true]
            ]);
        expect(resoult).to.be.equal(0);
    });
    it("nem négyzetes nyertél", function () {
        var resoult = whatIsGameState(
            [
                [1, 1, 1, 0],
                [1, -1, 1, 0],
                [1, 1, 1, 0]
            ],
            [
                [true, true, true, true],
                [true, false, true, true],
                [true, true, true, true]
            ]);
        expect(resoult).to.be.equal(1);
    });
    it("bajosbukó", function () {
        var resoult = whatIsGameState(
            [
                [1, 1, 1],
                [1, -1, 1],
                [1, 1, 1]
            ],
            [
                [false, true, true],
                [true, true, true],
                [true, true, true]
            ]);
        expect(resoult).to.be.equal(-1);
    });
});