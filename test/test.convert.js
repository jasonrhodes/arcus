var chai = require("chai"),
    converter = require("../index.js");

chai.should();

describe("Converter", function () {

    it("should convert RGB array to HSL", function () {

        converter.rgb([0, 255, 255]).hsl().should.deep.equal([180, 100, 50]);

    });

    it("should convert an RGB argument list to HSL", function () {

        converter.rgb(0, 255, 255).hsl().should.deep.equal([180, 100, 50]);

    });

});