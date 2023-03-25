/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    let mod=1000000007;
    let sum=0;
    for(let i=0; i<arr.length; i++){
    	let start = i-1
        let end = i+1;
    	while(start>=0 && arr[start]>=arr[i]) start--;
    	while(end<arr.length && arr[end]>arr[i]) end++;
    	sum=(sum+(end-i)*(i-start)*arr[i]%mod)%mod;
    }
    return sum;
    
};