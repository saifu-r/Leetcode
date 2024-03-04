/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length===0) return ''
    
    var prefix = strs[0]

    for(var i=1; i< strs.length; i++){
        var j= 0
        while(j< prefix.length && j< strs[i].length && prefix[j]=== strs[i][j]){
            j++
        }
        prefix= prefix.substring(0, j)
        if (prefix === "") {
            break; // If prefix becomes empty, no common prefix exists
        }
    }
    
    return prefix
    
};