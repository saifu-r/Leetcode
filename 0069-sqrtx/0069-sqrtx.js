/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0 || x === 1) return x; // Base cases for 0 and 1

    var low = 0;
    var high = x;

    while (low <= high) {
        var mid = Math.floor(low + (high - low) / 2);
        var sqr = mid * mid;

        if (sqr === x) {
            return mid;
        } else if (sqr < x) {
            low = mid + 1; // Adjust low to search in the upper half
        } else {
            high = mid - 1;
        }
    }
    return high;
};