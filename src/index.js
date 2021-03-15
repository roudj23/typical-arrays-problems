exports.min = function min (array) {
  if (Array.isArray(array) && array.length !== 0) {
      let minArg = array[0];
      for (let i = 1;i < array.length;i++) {
          if (array[i] < minArg) {
              minArg = array[i];
          }
      }
      return minArg;
  }
return 0;
}
exports.max = function max (array) {
  if (Array.isArray(array) && array.length !== 0) {
      let maxArg = array[0];
      for (let i = 1;i < array.length;i++) {
          if (array[i] > maxArg) {
              maxArg = array[i];
          }
      }
      return maxArg;
  }
return 0;
}

exports.avg = function avg (array) {
  if (Array.isArray(array) && array.length !== 0) {
      const avgArg = array.reduce((accumulator, value) => accumulator + value, 0)
      return avgArg / array.length;
  }
return 0;
}
