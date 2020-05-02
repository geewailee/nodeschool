// Use Array#reduce to implement a simple version of Array#map.

module.exports = function arrayMap(arr, fn) {
  // SOLUTION GOES HERE
  //   console.log(`arr ${arr}`);
  //   console.log(`fn ${fn}`);
  return arr.reduce((acc, curr) => {
    acc.push(fn(curr));
    return acc;
  }, []);
};

// arr 3,7,0,3,3,8,5,8,2,1,4,7,5
// fn function(item) { return item * 3 }
// arr 3,7,0,3,3,8,5,8,2,1,4,7,5
// fn function(item) { return [item * 3] }
