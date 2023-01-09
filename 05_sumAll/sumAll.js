const sumAll = function (start, end) {
  let sum = 0;
  if (end >= start && start>=0 && end>=0 && Number.isInteger(start) && Number.isInteger(end)) {
    for (i = start; i <= end; i++) {
      sum += i;
    }
  } else if (start >= end && start>=0 && end>=0 && Number.isInteger(start) && Number.isInteger(end)) {
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
