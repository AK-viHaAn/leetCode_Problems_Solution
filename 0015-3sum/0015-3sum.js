/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
     nums.sort((a,b)=>a-b)
    let result = []
    // if length is less than 3 element
    if(nums.length<3){return result}

    for(let i = 0;i<nums.length;i++){
        let l = i+1
        let r = nums.length-1

        if(i>0 && nums[i]==nums[i-1]) {continue}

        while(l<r){
            let sum = nums[i]+nums[l]+nums[r]
           if(sum == 0){
            let arr = [nums[i],nums[l],nums[r]]
            result.push(arr)
            l++
            while(nums[l]==nums[l-1] && l<r){ l++ }
           }else if(sum>0){
            r--
           }else{
            l++
           }
           
        }


    }
    return result
    
};