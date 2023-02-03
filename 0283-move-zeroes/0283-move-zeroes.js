/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
        let i = 0
        let zeros
        let j = nums.length
                while (i<j){
                        if(nums[i]==0){
                             zeros = nums.splice(i,1)
                                 nums.push(zeros[0])
                                         j--
                          }else{
                                i++
                          }
                      }return  nums
    
};