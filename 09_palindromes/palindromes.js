const palindromes = function (string) {
// returns true if string === string reverse
//reverse string then comparasion then return
let reversed =  string.toLowerCase().replace(/[^a-z]/g, "");
return reversed.split("").reverse().join("") == reversed;

};
// Do not edit below this line
module.exports = palindromes;
