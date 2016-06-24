/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    var count = 0;
	var countForLength = 1;
	var remainingDigits = 9;
	for (var i = 1; i <= n; i++) {
		countForLength *= remainingDigits;
		count += countForLength;
		if (i > 1) {
			remainingDigits--;
		}
	}
	
	return ++count;

};
