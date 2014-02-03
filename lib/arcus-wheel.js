/* global module: false */

module.exports = {

    /**
     * Converts a hue degree value from the RGB color wheel
     * to its corresponding RYB value
     * 
     * @param {int} hue     RGB degree value
     */
    GtoY: function (hue) {
        if (hue <= 60) {
            return hue * 2;
        }

        if (hue <= 120) {
            return hue + 60;
        }

        if (hue <= 240) {
            return ((hue - 120) / 2) + 180;
        }

        if (hue <= 270) {
            return ((hue - 240) * 2) + 240;
        }

        return ((hue - 270) * (2/3)) + 300;
    },

    /**
     * Converts a hue degree value from the RYB color wheel
     * to its corresponding RGB value
     * 
     * @param {int} hue     RYB degree value
     */
    YtoG: function (hue) {
        if (hue <= 120) {
            return hue/2;
        }

        if (hue <= 180) {
            return hue - 60;
        }

        if (hue <= 240) {
            return ((hue - 180) * 2) + 120;
        }

        if (hue <= 300) {
            return ((hue - 240) / 2) + 240;
        }

        return ((hue - 300) * 1.5) + 270;
    },

    /**
     * Recursively edits a degree value to fit 
     * inside the 0-360 range
     * 
     * @param  {int} degrees
     * @return {int}            Value guaranteed between 0-360
     */
    contain: function (degrees) {
        if (degrees > 360)  { degrees = this.contain(degrees - 360); }
        if (degrees < 0)    { degrees = this.contain(degrees + 360); }

        return degrees;
    },

    /**
     * Takes an RGB degree value and a degree value to 
     * move around the wheel, converts the value to
     * its corresponding RYB value, moves the specified
     * amount, then converts back to RGB and returns
     * 
     * @param  {int} base    RGB degree value
     * @param  {int} degrees Number of degrees to move (pos/neg)
     * @return {int}         Converted degree value
     */
    moveGValueOnYWheel: function (base, degrees) {
        var result = this.GtoY(base) + degrees;
        return this.YtoG(this.contain(result));
    },

    /**
     * Takes an RYB degree value and a degree value to 
     * move around the wheel, converts the value to
     * its corresponding RGB value, moves the specified
     * amount, then converts back to RYB and returns
     * 
     * @param  {int} base    RYB degree value
     * @param  {int} degrees Number of degrees to move (pos/neg)
     * @return {int}         Converted degree value
     */
    moveYValueonGWheel: function (base, degrees) {
        var result = this.YtoG(base) + degrees;
        return this.GtoY(this.contain(result));
    }

};