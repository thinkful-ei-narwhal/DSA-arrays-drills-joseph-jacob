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

const arr = [4, 6, -3, 5, -2, 1];
console.log(maxSum(arr));


