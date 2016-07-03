/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {

    nums.sort(function(a, b) { return a - b; });
    
    var largestSets = [];

    largestSets[0] = [nums[0]];


    for (var i = 1; i < nums.length; i++) {

        var maxSetSize = 1;
        var curr = nums[i];
        largestSets[i] = [curr];

        for (var j = i - 1; j >= 0; j--) {

            var prev = nums[j];
            if (curr % prev === 0) {
                var prevSet = largestSets[j];
                var newSize = 1 + prevSet.length;
                if (maxSetSize < newSize) {
                    largestSets[i] = prevSet.concat([curr]);
                    maxSetSize = newSize;
                }
            }
        }
    }

    var largestSet = [];
    for (var i = 0; i < nums.length; i++) {
        var currSet = largestSets[i];
        if (largestSet.length < currSet.length) {
            largestSet = currSet;
        }
    }    

    return largestSet;
    
};