/**
 * @param {number} num
 * @return {boolean}
 */
var mySqrt = function(num) {
    if (num === 0) return 0;
    var small = 1;
    for (var big = 1; num / big > big; big *= 2) {
        small = big;
    }

    if (num / big === big) return big;
    if (num / small === small) return small;

    var mid = Math.floor((small + big) / 2);
    while (small < mid && mid < big) {
        if (num / mid === mid) return mid;
        if (num / mid > mid) {
            small = mid;
        } else {
            big = mid;
        }
        mid = Math.floor((small + big) / 2);
    }

    return mid;
};

