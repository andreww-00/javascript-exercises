const sumAll = function (start, end) {
  let sum = 0;
  if (start<0 || end<0) return "ERROR";
  if (!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";
  if (end >= start) {
    for (i = start; i <= end; i++) {
      sum += i;
    }
  } else if (start >= end) {
    for (i = end; i <= start; i++) {
      sum += i;
    }
  } else {
    return "ERROR";
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
