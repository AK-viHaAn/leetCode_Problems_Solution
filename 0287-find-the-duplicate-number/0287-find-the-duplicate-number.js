/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let n = nums.sort((a,b)=>(a-b))
  for(i = 0; i<n.length-1;i++){
    if(n[i]==n[i+1]){
        return n[i]
    }
  }return 0
    
};