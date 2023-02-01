/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function(length, width, height, mass) {
    let volume = (length*width*height)
    if((length>=10000)||(width>=10000)||(height>=10000)||(volume>=1000000000)){
        if((mass)>=100){
            return "Both";
        }else{
            return"Bulky";
        }      
    }else if(mass>=100){
        return"Heavy";
    }else{
        return"Neither";
    }
};