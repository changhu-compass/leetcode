/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */


var canMeasureWater  = function(x, y, z) {
    if (z === 0) return true;
    if (z === x || z === y || z === x + y) return true;
    if (z > x + y) return false;

    var g = gcd(x, y);

    return z % g === 0;

};



var gcd = function(x, y) {
    if (x < y) return gcd(y, x);
    if (x % y === 0) return y;
    return gcd(y, x % y);
};

