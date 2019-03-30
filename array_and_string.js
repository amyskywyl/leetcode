// Find Pivot Index
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
var pivotIndex = function (nums) {
  const add = (a, b) => a + b;
  for (let i = 0; i < nums.length; i++) {
    let left = nums.slice(0, i);
    let right = nums.slice(i + 1);
    let left_sum;
    let right_sum;
    if (left.length > 0) {
      left_sum = left.reduce(add)
    } else {
      left_sum = 0
    }

    if (right.length > 0) {
      right_sum = right.reduce(add)
    } else {
      right_sum = 0
    }
    
    if (left_sum === right_sum) {
      return i;
    }
  }
  return -1;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  let maxNum = Math.max(...nums);
  let maxInd = nums.indexOf(maxNum);
  for (let i = 0; i < nums.length; i++) {
    if (maxNum - nums[i] * 2 >= 0 || i === maxInd) {
      continue;
    } else {
      return -1;
    }
  }
  return maxInd;
};
console.log(dominantIndex([3, 6, 1, 0]));
console.log(dominantIndex([1, 2, 3, 4]));

// C1.1 Is Unique
var allUniqueChars = function (string) {

  // O(n^2) approach, no additional data structures used
  // for each character, check remaining characters for duplicates
  for (var i = 0; i < string.length - 1; i++) {
    for (var j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        return false; // if match, return false
      }
    }
  }
  return true; // if no match, return true
};

// C1.3 URLify
function URLify(str, trueLength) {
  let newString = '';
  for (let i = 0; i < trueLength; i++) {
    if (str[i] === ' ') newString += '20%';
    else newString += str[i];
  }
  return newString;
}

// C1.5 One Away
function oneAway(str1, str2) {
  const str1Length = str1.length, str2Length = str2.length;

  if (Math.abs(str1Length - str2Length) > 1) return false;

  const isInsertion = str1Length < str2Length,
    isDeletedChar = str1Length > str2Length;

  let isEdited = false, i, x;

  for (i = x = 0; i < str1Length && x < str2Length; i++ , x++) {
    if (str1[i] !== str2[x]) {
      if (isEdited) return false;
      if (isInsertion) i--;
      else if (isDeletedChar) x--;
      isEdited = true;
    }
  }

  return true;
}

// C1.7 
const rotate = function (matrix) {
  matrix = matrix.reverse();
  for (let i in matrix)  {
    for (let j = 0; j < i; j++) {
      console.log(i);
      console.log(j);
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  return matrix;
}