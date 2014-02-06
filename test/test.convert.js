var expect = require("chai").expect,
    converter = require("../index.js").converter;

describe("Arcus.converter", function () {

    describe("RGB converter", function () {

        var rgb = [0, 255, 255];
        var expected = {
            hsl: [180, 100, 50]
        };
        
        it("should convert array to HSL", function () {

            var hsl = converter.rgb2hsl(rgb);
            expect(hsl).to.deep.equal(expected.hsl);

        });

        it("should convert argument list to HSL", function () {

            var hsl = converter.rgb2hsl(rgb[0], rgb[1], rgb[2]);
            expect(hsl).to.deep.equal(expected.hsl);

        });

    });

});