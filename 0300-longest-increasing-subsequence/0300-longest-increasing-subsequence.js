/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {


   //dp[i] represents LIS from 0th index to ith index
   let dp = new Array(nums.length).fill(1);


   for(let i=0;i<nums.length;i++){
       for(let j=0;j<i;j++){
           if(nums[i] > nums[j] && dp[i] < dp[j] +1)
               dp[i] = dp[j] +1;
       }
   }
   let LIS = 0;
     for(let i=0;i<nums.length;i++){
         LIS = Math.max(LIS, dp[i]);
     }
  
   return LIS


//TC: O(n*n)
//SC: O(n)  
};
    
    