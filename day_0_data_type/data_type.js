const firstInteger = 4;
const firstDecimal = 4.0;
const firstString = 'HackerRank ';

var secondInteger = parseInt(window.prompt("Enter integer number"));
var secondDecimal = parseFloat(window.prompt("Enter float number"));
var secondString = window.prompt("Enter string");

// Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.

console.log(firstInteger + parseInt(secondInteger));

// Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.

console.log(parseFloat(firstDecimal + parseFloat(secondDecimal)));

// Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.

console.log(firstString + secondString);