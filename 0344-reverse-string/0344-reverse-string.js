/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
        let i = 0
        let j = s.length - 1
    while (i < j) {
        s[i] = s[i].concat(s[j])
        s[j] = s[i].slice(0, -1)
        s[i] = s[i].slice(-1)
        i++
        j--
    }
    return s
    
};