//Replace all white space with a %
//can only make one pass through the string 
'use strict';

function Urlify(string) {
  let newString = string.split(' ');
  return newString.join('%');
}

console.log(Urlify('www.thinkful.com /tauh ida parv een'));

// Filter out all number less than 5 in an array

function filterNums(arr) {
  const newArray = [];
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

// Max sum solution

function maxSum(numArr) {
  //find a sequence of passed in arr that is larger than any other
  //sequence in the array
  let maxSum = 0;
  let currentSum = 0;
  
  for(let i = 0; i < numArr.length; i++) {
    currentSum += numArr[i];
    if(currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  return maxSum;
}

function findProducts(arr) {
  const newArray = [];
  for(let i = 0; i < arr.length; i++) {
    let value = 1;
    for(let n = 0; n < arr.length; n++) {
      if (arr.indexOf(arr[i]) !== arr.indexOf(arr[n])) {
        value *= arr[n]
      }
    }
    newArray.push(value)
  }
  return newArray
}




//
function ArraySearcher(arr) {
  //search through array, when you hit a 0, set the entire row and column to 0
  let zeroColumn = [];
  let zeroRow = [];

  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      if(arr[i][j] === 0) {
        zeroRow[i] = true;
        zeroColumn[j] = true;
      }
    }
  }
  for(let k = 0; k < arr.length; k++) {
    for(let m = 0; m < arr[k].length; m++) {
      if(zeroRow[k] || zeroColumn[m]) {
        arr[k][m] = 0;
      }
    }
  }
  return arr;
}
const input = [[1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]];
console.log(ArraySearcher(input));



function rotateString(str1, str2) {
  return (str2 + str2).indexOf(str1) !== -1;
}

console.log(rotateString('amazon', 'azonma'));
