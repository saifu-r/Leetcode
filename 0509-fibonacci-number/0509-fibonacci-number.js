/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    
    function fibonacci(n){
        if(n==0) return 0
        else if(n==1) return 1
        
        else{
            return fibonacci(n-1)+ fibonacci(n-2)
        }
        
    }
    return fibonacci(n)
};