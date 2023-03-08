const fibonacci = function(x) {
//index of fibonacci sequence, need array that is the sequence go to index 25 for the sake of this example
//1 1 2 3 5 8 
//didn't need an array for this after all
if(x<0) {
    return "OOPS";
}
let value = 1;
let preNum = 0
for(i=1;i<x; i++) {
    let nextVal = value + preNum;
    preNum = value;
    value = nextVal;
    
}
return value;
};

// Do not edit below this line
module.exports = fibonacci;
