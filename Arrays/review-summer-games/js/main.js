//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
function arrayMultiply(array) {
  product = 1;
  for (i = 0; i < array.length; i++) {
    product *= array[i];
  }
  return product;
}