/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map= {}
    for(var i= 0; i< nums.length ; i++){
        const newNum= target- nums[i]
        j= map[newNum]
        if(j != null){
            return [i, j]
        }else{
            map[nums[i]]= i 
        }
        
    }
};