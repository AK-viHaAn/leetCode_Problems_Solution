/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let stack = [];


   let n = s.length;


   for(let i=0;i<n;i++){
       let incomingCharacter = s[i];


       if( stack.length != 0 && incomingCharacter == '*'){
           stack.pop();
       }


       if(incomingCharacter != '*')
       {
           stack.push(incomingCharacter);
       }
   }


   let ans = stack.join("");


   return ans;



    
};