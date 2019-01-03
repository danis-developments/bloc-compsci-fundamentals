function hasDuplicate(integerArray) {
  let testArray = [];
  for (let i = 0; i < integerArray.length; i++) {
    const currentValue = integerArray[i];
    if (testArray.includes(currentValue)) {
      return true;
    } else {
      testArray.push(currentValue);
    }
  }
  return false;
}

console.log(hasDuplicate([0, 1, 2, 3]));
console.log(hasDuplicate([0, 1, 2, 3, 0]));
console.log(hasDuplicate([1, 1, 2, 3, 0]));
console.log(hasDuplicate([0, 1, 2, 3, 3]));
