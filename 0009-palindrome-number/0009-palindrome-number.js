/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false
    
    reverse= 0
    original= x
    
    while(x>0){
        reverse= reverse* 10 + x% 10
        x= Math.floor(x/10)
    }
    
    return reverse=== original
};