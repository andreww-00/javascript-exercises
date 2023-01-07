const repeatString = function (str, iteration) {
  let string = str;
  let num = iteration;
  let i = 1;
  if (num < 0) {
    return "ERROR";
  } else if (num == 0) {
    return "";
  } else if (str == "") {
    return "";
  } else {
    while (i < num) {
      i++;
      string = string + "hey";
    }
    return string;
  }
};
// Do not edit below this line
module.exports = repeatString;
