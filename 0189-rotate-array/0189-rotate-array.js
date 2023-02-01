/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 let rever = function (nums,i,j,k){
                 while(i<j){
                    let temp = nums[j]   
                       nums[j]=nums[i]   
                       nums[i]= temp    
                          i++
                          j--
                    }return nums
             }
var rotate = function(nums, k) {
                   k%= nums.length
                     rever(nums,0,nums.length-1)
                     rever(nums,0,k-1)
                     rever(nums,k,nums.length-1)
    
                            console.log(nums) 
             };
       
