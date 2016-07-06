/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {

    if (nums[0] >= s) return 1;

    var minLength = nums.length + 1;
    
    var start = 0;
    var end = 0;
    var isGrowing = true;
    var sum = nums[0];

    while (end < nums.length && start < nums.length) {
        
        if (sum >= s) {
            isGrowing = false;
            minLength = Math.min(minLength, end - start + 1);
        }


        if (isGrowing) {
            end++;
            sum += nums[end];
        } else {
            sum -= nums[start];
            start++;
            if (sum < s) {
                isGrowing = true;
            }
        }
    }

    return minLength > nums.length ? 0 : minLength;

};
