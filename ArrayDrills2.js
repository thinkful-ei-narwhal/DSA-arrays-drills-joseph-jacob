//Replace all white space with a %
//can only make one pass through the string 
'use strict';

function Urlify(string) {
  let newString = string.split(' ');
  return newString.join('%');
}

// console.log(Urlify('www.thinkful.com /tauh ida parv een'));

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
// console.log(maxSum(arr));

// Merge arrays solution

function mergeArrays(arr1, arr2) {
  const singleArray = arr1.concat(arr2)
  return singleArray.sort((a,b) => a-b)
}

// console.log(mergeArrays([1, 2, 7, 1, 4, 100], [3, 4, 10, 3, 10]));

// Remove characters

function removeVowels(string, vowels) {
  let finalString = '';
  for(let s = 0; s < string.length; s++) {
    let add = true
    for(let v = 0; v < vowels.length; v++) {
      if (string[s] === vowels[v]) add = false
    }
    if (add) finalString += string[s]
  }
  return finalString
}

// console.log(removeVowels('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'))

// Products solution

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

console.log(findProducts([1, 3, 9, 4]));