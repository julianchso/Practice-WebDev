// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi".
// If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

function firstLastArray(array) {
  firstNum = array[0];
  lastNum = array[array.length - 1];

  if (firstNum < lastNum) {
    console.log("Hi");
  } else if (firstNum > lastNum) {
    console.log("Bye")
  } else {
    console.log("we close in an hour")
  }
}