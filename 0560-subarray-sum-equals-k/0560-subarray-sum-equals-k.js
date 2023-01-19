/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let prefixSum = 0;
    let answerCount = 0;
    let map = new Map();
    map.set(0,1);


    for(let i=0;i<nums.length;i++){
        prefixSum += nums[i];

        if(map.has(prefixSum-k))
            answerCount+=map.get(prefixSum-k);

        map.set(prefixSum, (map.get(prefixSum) || 0)+1 );
    }

    return answerCount;
    
};