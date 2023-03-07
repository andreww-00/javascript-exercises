const add = function(x,y) {
	let sum = x + y;
  return sum;
};

const subtract = function(x,y) {
	let sub = x - y;
  return sub;
};

const sum = function(result) {
	return result.reduce((total, current) => total + current, 0);
};

const multiply = function(result) {
 return result.reduce((total, current) => total * current, 1);
};

const power = function(x,a) {
	return Math.pow(x,a);
};

const factorial = function(x) {
	// x*(x-1)*(x-2)..*1
  let fact = 1;
  if (x===0) {
    return 1;
  } else {
    while (x>0) {
      fact = fact * x;
      x = x-1;
    }
    return fact;
  }
  //could be simplified with a for loop
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
