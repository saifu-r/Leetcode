/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    words= []
    s= s.trim()
    
    // if(s===null|| s.length===0) return 0
    
    words= s.split(' ')    
    var newWord= words[words.length-1]
    
    return newWord.length
    
    
};