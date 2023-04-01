/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    
     let count = {}
    let result = []
    let mid = Math.floor(nums.length/3)

    for (let i of nums){
        if(count[i]!== undefined){
            count[i]++
        }else{
            count[i]=1
        }
        if(count[i] == mid+1){
            result.push(i)
        }
    }
    return result
    
};