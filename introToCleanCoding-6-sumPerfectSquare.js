/*
Square Given an array of integers, 
find out whether the sum of the integers is a perfect square. 
If it is a perfect square, return the square root, 
otherwise return the sum.
*/

const add = (firstNumber, secondNumber) => firstNumber + secondNumber;

function sumIntegerArray(integerArray) {
  return integerArray.reduce(add);
}

function isPerfectSquare(integer) {
  let squareRoot = 1;
  let square = 1;
  while (square <= integer) {
    if (square === integer) return true;
    squareRoot++;
    square = squareRoot ** 2;
  }
  return false;
}

function sumOrSquareRootOfSum(integerArray) {
  const sum = sumIntegerArray(integerArray);
  if (isPerfectSquare(sum)) {
    return Math.sqrt(sum);
  } else {
    return sum;
  }
}

console.log(sumOrSquareRootOfSum([10, 1, 4, 6, 1, 1, 2]));
console.log(sumOrSquareRootOfSum([1, 1]));
console.log(sumOrSquareRootOfSum([-1]));
console.log(sumOrSquareRootOfSum([0]));
