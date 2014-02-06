var expect = require("chai").expect,
    sinon = require("sinon"),
    Arcus = require("../index.js");

describe("Arcus.Chords", function () {

    describe("constructor", function () {

        it("should accept a hue value", function () {

            var maker = new Arcus.Chord(140, {});
            expect(maker.base).to.equal(140, "Hue not set correctly.");

        });

        it("should convert a string hue to an integer", function () {

            var maker = new Arcus.Chord("140", {});
            expect(maker.base).to.equal(140);

        });

        it("should fail if hue isn't passed in correctly", function () {

            expect(function () { 
                new Arcus.Chord([140, 20, 30], {}); 
            }, "Passing the hue as an array should have failed (must be a number)")

            .to.throw(/baseHue must be a number/);


            expect(function () { 
                new Arcus.Chord({ hue: 140 }, {}); 
            }, "Passing the hue as an object should have failed (must be a number)")

            .to.throw(/baseHue must be a number/);


            expect(function () { 
                new Arcus.Chord(); 
            }, "Hue is required (and must be a number)")

            .to.throw(/baseHue must be a number/);

        });

        it("should fail if options aren't passed in correctly", function () {

            expect(function () { 
                new Arcus.Chord(140, []);
            }, "Options should fail if passed as an array")

            .to.throw(/options must be an object/);


            expect(function () { 
                new Arcus.Chord(140, "something");
            }, "Options should fail if passed as a string")

            .to.throw(/options must be an object/);


            expect(function () { 
                new Arcus.Chord(140, true);
            }, "Options should fail if passed as boolean")

            .to.throw(/options must be an object/);

        });

        it("should set default options", function () {

            var maker = new Arcus.Chord(140);

            expect(maker.options.n, "default n not set").to.equal(3);

            expect(maker.options.differ(4, 3), "default differ function not set").to.equal(1);

        });

    });

    describe("compute method", function () {

        var stubs = { rotate: sinon.stub().returns(120) };

        it("should return rotated value if there is no universe", function () {
            
            var maker = new Arcus.Chord(360, {
                rotate: stubs.rotate
            });

            expect(maker.compute()).to.equal(120);

        });

        sinon.stub(maker.prototype, "closest")

    });

});