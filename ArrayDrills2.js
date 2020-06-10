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

console.log(filterNums([2, 4, 10, 5, 6, 2, 1]));

// 

function maxSum(numArr)