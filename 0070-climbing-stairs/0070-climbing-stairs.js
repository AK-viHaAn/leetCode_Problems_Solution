/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let fibo = [0,1,2]
    if(n<3){
        return fibo[n]
    }
    for(let i = 3; i<=n; i++){
        let x = fibo[i-1]+fibo[i-2]
        fibo.push(x)
    }
    return fibo[n]
    
};