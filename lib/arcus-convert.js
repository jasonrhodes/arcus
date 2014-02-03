/* global module: false */
/* global require: false */

var convert = require("color-convert");

module.exports = convert();

// var RGB = require("./lib/RGB");

// var ColorConverter = function (options) { 
//     this.options = options;
// };

// ColorConverter.prototype.round = function (floatNum, places) {
//     places = places || 0;
//     var mult = Math.pow(10, places);

//     return Math.round(floatNum * mult) / mult;
// };

// ColorConverter.prototype.percentify = function (value, places) {
//     return this.round(value * 100, places);
// };

// ColorConverter.prototype.rgbToHsl = function (rgb) {
    
//     rgb = new RGB(rgb);

//     var hue = rgb.getHslHue();
//     var lightness = rgb.getHslLightness();
//     var saturation = rgb.getHslSaturation(lightness);
    
//     return [hue, this.percentify(saturation) + "%", this.percentify(lightness) + "%"];
// };

// ColorConverter.prototype.rgbToHsv = function (rgb) {
    
//     rgb = new RGB(rgb);

// };

// ColorConverter.prototype.rgbToHex = function (rgb) {

//     rgb = new RGB(rgb);

//     var red = rgb.getHexRed();
//     var green = rgb.getHexGreen();
//     var blue = rgb.getHexBlue();

//     return "#" + red + green + blue;
// };

// ColorConverter.prototype.rgbToCmyk = function (rgb) {

//     rgb = new RGB(rgb);

//     var black = rgb.getCmykBlack();
//     var c = this.percentify(rgb.getCmykCyan(black));
//     var m = this.percentify(rgb.getCmykMagenta(black));
//     var y = this.percentify(rgb.getCmykYellow(black));
//     var k = this.percentify(black);

//     return [c, m, y, k];
// };

// module.exports = new ColorConverter();