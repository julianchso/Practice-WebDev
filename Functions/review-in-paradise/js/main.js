// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
// let stringVar = "asdfasdfasdfasdf";

// alert(stringVar[1]);

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
// function timesDivide(a, b, c) {
//   answer = (a / b) * c;
//   alert(answer);
// }

// timesDivide(534, 23, 4);

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

function cubeRoot(num) {
  root = num ** (1 / 3);
  console.log(root);
}


// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function skipFive(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 5 != 0) {
      console.log(i)
    }
  }
}