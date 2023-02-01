/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    
        let result = []
            for(let i = 0;i<=nums.length-1;i++){
                let sqr = nums[i]**2
                     result.push(sqr)
            }
            return result.sort((a,b)=>a-b)    
};