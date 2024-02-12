/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
//     ------------binary search-----------------
    var low= 0
    var high= nums.length-1
    while(low<= high){
        var mid= Math.floor(low + (high-low)/2)
        
        if(nums[mid] == target){
            return mid
        }else if(nums[mid]< target){
            low= mid + 1
        }else{
            high= mid-1
        }
    }
    return low
    
    
//     -----------for loop [O(n)]-----------
    
    // for(var i = 0; i< nums.length; i++){
    //     if(nums[i]>= target){
    //         return i
    //     }
    // }
    // return nums.length
     
};