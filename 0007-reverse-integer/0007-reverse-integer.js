/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
      let n = x.toString().split("")
    let i = 0
    let j = n.length - 1
    let k
    while (i < j) {
        if (n[i] == "-") {
            i++
        }
        k = n[j]
        n[j] = n[i]
        n[i] = k
        i++
        j--

    }
   if((n.join('') >= 2147483647) || (n.join('') <= (-2147483648))){
        return 0
    }
    return n.join('')
    
};