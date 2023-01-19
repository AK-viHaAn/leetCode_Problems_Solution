/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   var str = String(x)
    var totalLength=str.length
    for(var i = 0;i<totalLength;i++){
        if(str[i]!==str[totalLength-1 -i]){
            return false
        }
    }
    return true
};