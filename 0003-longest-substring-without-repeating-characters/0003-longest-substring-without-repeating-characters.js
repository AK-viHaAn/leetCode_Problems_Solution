/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
      let maxLen = 0
   const set = new Set()
   let i = 0
   let j = 0
   while(i<s.length){
       if(!set.has(s[i])){
           set.add(s[i])
           i++
           maxLen = Math.max(maxLen,set.size)
       }else{
           set.delete(s[j])
           j++
       }
   }
   return maxLen
    
};