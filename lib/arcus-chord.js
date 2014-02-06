/* global require: false */
/* global module: false */

var _ = require("underscore"),
    wheel = require("./arcus-wheel");

var Maker = function (baseHue, options) {

    var defaults = {
        n: 3,
        differ: function (a, b) {
            return Math.abs(b - a);
        },
        rotate: wheel.moveGValueOnYWheel
    };

    if (!baseHue || typeof baseHue === "object") throw new Error("baseHue must be a number");
    if (options && (typeof options !== "object" || options instanceof Array)) throw new Error("options must be an object, if set");

    this.options = _.extend({}, defaults, options);
    this.base = parseInt(baseHue, 10);

};

Maker.prototype.compute = function (n) {
    var adjustedHue = this.options.rotate(this.base, this.options.angle);
    n = n || 3;

    if (!this.options.universe) {
        return adjustedHue;
    }

    return this.closest(adjustedHue, n);
};

Maker.prototype.closest = function (hue, n) {

    if (!this.options.universe) {
        throw new Error("Closest needs a universe of colors to compare against");
    }

    var diffed = _.map(this.options.universe, function (color, i) {
        return {
            color: color,
            diff: this.options.differ(hue, color)
        };
    });

    diffed.sort(function (a, b) {
        return a.diff > b.diff ? 1 : -1;
    });

    return diffed.slice(0, n);
};


Maker.prototype.Analagous = function (n) {
    
    n = n ? n + 1 : 6;

    var result = this.compute({ n: n, angle: 0 });

    // Remove first result because it's the base color
    return result.slice(1);
};

Maker.prototype.Complementary = function (n) {

};

Maker.prototype.SplitComplementary = function (n) {

};

Maker.prototype.Triad = function (n) {

};

Maker.prototype.Square = function () {

};

Maker.prototype.TetradicPositive = function () {

};

Maker.prototype.TetradicNegative = function () {

};


module.exports = Maker;