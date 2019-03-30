var mySqrt = function (x) {
  if (x * x === x) { return x }
  let num = Math.floor(x / 2);
  while (num * num > x) {
    num = Math.floor(num / 2);
  }
  num *= 2;
  while (num * num > x) {
    console.log(num)
    if (num * num === x) return num
    num--;
  }
  return num;

};

var climbStairs = function (n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  let arr = helper(n, [1, 2]);
  return arr[n - 1];
};

function helper(n, arr) {
  while (arr.length < n) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2])
  }
  return arr;
}

var simplifyPath = function (path) {
  var elements = path.split('/');
  var stack = [];
  for (var e in elements) {
    if (elements[e] == "") continue;
    if (elements[e] == ".") continue;
    if (elements[e] == "..") stack.pop();
    else {
      stack.push(elements[e]);
    }
  }
  return '/' + stack.join('/');
};

var setZeroes = function (matrix) {
  let zeroCols = new Set();
  let zeroRows = new Set();
  let rows = matrix.length;
  let cols = matrix[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        zeroCols.add(j);
        zeroRows.add(i);
      }
    }
  }
  for (let i = 0; i < rows; i++) {
    if (zeroRows.has(i)) {
      matrix[i] = matrix[i].fill(0);
      continue;
    }
    for (let j = 0; j < cols; j++) {
      if (zeroCols.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
};

var searchMatrix = function (matrix, target) {
  if (matrix.length === 0) return false
  let lastIndex = matrix[0].length - 1;
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][lastIndex] === target) {
      return true;
    } else if (matrix[i][lastIndex] < target) {
      continue;
    } else {
      return matrix[i].includes(target)
    }
  }
  return false
};



