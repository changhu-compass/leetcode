/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    var small = 1;
    for (var big = 1; num / big > big; big *= 2) {
        small = big;
    }

    if (num / big === big) return true;
    if (num / small === small) return true;

    var mid = Math.floor((small + big) / 2);
    while (small < mid && mid < big) {
        if (num / mid === mid) return true;
        if (num / mid > mid) {
            small = mid;
        } else {
            big = mid;
        }
        mid = Math.floor((small + big) / 2);
    }

    return false;
};

