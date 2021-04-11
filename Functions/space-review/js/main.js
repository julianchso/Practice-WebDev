//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
numbers = [3, 4, 5, 6, 2];

function sumArray() {
  sum = 0;
  numbers.forEach((num) => {
    sum += num;
  });
  return sum;
}

console.log(sumArray());

function reduceSum(arr) {
  arr.reduce((total, num) => total + num, 0);
}

console.log(reduceSum([3, 4, 5]));

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squared(arr) {
  squaredArr = [];
  arr.forEach((num) => {
    num = num ** 2;
    squaredArr.push(num);
  });
  return squaredArr;
}

function mapSquared(arr) {
  let squaredArr = arr.map((num) => num ** 2);
  return squaredArr;
}

//Create a function that takes string
//Print the reverse of that string to the console
function reversed(str) {
  reversedStr = "";
  for (let i = 0; i < str.length; i++) {
    reversedStr += str[str.length - i - 1];
  }
  return reversedStr;
}

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palindrome(str) {
  reversedString = reversed(str);
  if (str == reversedString) {
    return "This word is a palindrome";
  } else {
    return "This word is NOT a palindrome";
  }
}
