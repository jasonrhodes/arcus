var expect = require("chai").expect,
    arcus = require("../index.js");

describe("Arcus.converter", function () {

    describe("RGB converter", function () {

        var rgb = [0, 255, 255];
        var expected = {
            hsl: [180, 100, 50]
        };
        
        it("should convert array to HSL", function () {

            var hsl = arcus.converter.rgb(rgb).hsl();
            expect(hsl).to.deep.equal(expected.hsl);

        });

        it("should convert argument list to HSL", function () {

            var hsl = arcus.converter.rgb(rgb[0], rgb[1], rgb[2]).hsl();
            expect(hsl).to.deep.equal(expected.hsl);

        });

    });

});