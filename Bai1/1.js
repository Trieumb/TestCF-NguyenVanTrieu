let inputArray = [2, 3, -5, -2, 4];

function adjacentElementsProduct (inputArray) {
  let max = -1;
  for (let i = 0; i < inputArray.length - 1; i++) {
    if (inputArray[i] * inputArray[i + 1] > max) {
      max = inputArray[i] * inputArray[i + 1];
    }
  }
  return max;
}
console.log (adjacentElementsProduct (inputArray));
