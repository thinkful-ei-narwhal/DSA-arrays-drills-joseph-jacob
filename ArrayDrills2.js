//Replace all white space with a %
//can only make one pass through the string 
'use strict';

function Urlify(string) {
  let newString = string.split(' ');
  return newString.join('%');
}

console.log(Urlify('www.thinkful.com /tauh ida parv een'));