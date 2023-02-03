/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
            let sin = s.split(' ')

            let result=[]
                for(let i = 0;i<sin.length;i++){
                    var str = sin[i].split('')
                    let f = 0
                    let j = str.length-1
                while(f<j){
                    str[f]=str[f].concat(str[j])
                    str[j]=str[f].slice(0, -1)
                    str[f]=str[f].slice( -1)
                    f++
                    j--
                }
                     result.push(str.join(''))
                }
                    return result.join(' ')
    
};