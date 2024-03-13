/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // if(n<=2) return n
    // else{
    //     return climbStairs(n-1)+climbStairs(n-2)
    // }
    
//     var memo= [1,1,2]
    
//     for(var i=3; i<=n; i++){
//         memo[i]= memo[i-1]+ memo[i-2]
//     }
//     return memo[n]
    
    var memo= {}
    
    const count= function(k){
        if(memo[k]) return memo[k]
        if(k<=2) return k
        memo[k]= count(k-1)+ count(k-2)
        return memo[k]
    }
    return count(n)
};