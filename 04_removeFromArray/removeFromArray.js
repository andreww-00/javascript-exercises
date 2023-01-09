const removeFromArray = function(array, argument) {
// this is before I knew indexOf existed I kinda created
//it myself tho
// let array = array;
// for (i=0; i < array.length(); i++) {
//     if (deleted = array[i]) {

//     }
// }
let indexRemoval = array.indexOf(argument)
let newArray = array.splice(0, 1);
return newArray;
};


// Do not edit below this line
module.exports = removeFromArray;
