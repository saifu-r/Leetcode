/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var roman= {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
    var number= 0
    for(var i=0; i<s.length; i++){
        if(roman[s[i]]< roman[s[i+ 1]]){
            number-= roman[s[i]]
        }else{
            number+= roman[s[i]]
        }
    }
    return number
};