/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    
  let leftSum = 0
    let rightSum = 0
    let totalSum = 0
    for(i=0;i<nums.length;i++){
        totalSum = totalSum + nums[i]
    }
    for(let j = 0;j<nums.length;j++){
        rightSum = totalSum - leftSum - nums[j]

        if(leftSum==rightSum){
            return j
        }
        leftSum = leftSum + nums[j]
    }
    return -1
    
};