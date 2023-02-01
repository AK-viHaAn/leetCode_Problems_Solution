/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
           
    if(s==t){
    return true
    }
                 let i = 0
                 let j = 0
                 let ans = 0
                    
                    while(j<=t.length-1){
                            if(s[i]==t[j]){
                                 i++
                                 j++
                                 ans++
                         }else {
                            j++
                         }
                            if(s.length==ans){
                                 return true
                         }
                      }
                      return false
    
};