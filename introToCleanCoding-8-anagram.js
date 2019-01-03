function stringToAlphaCharacters(text) {
  return text
    .match(/[a-z]+/gi)
    .join("")
    .split("");
}

function charactersToSortedString(characterArray) {
  return characterArray
    .slice()
    .sort()
    .join("");
}

function isAnagram(stringOne, stringTwo) {
  if (stringOne === stringTwo) {
    return false;
  }
  const alphaArrayOne = stringToAlphaCharacters(stringOne);
  const alphaArrayTwo = stringToAlphaCharacters(stringTwo);

  if (alphaArrayOne.length !== alphaArrayTwo.length) {
    return false;
  }

  if (
    charactersToSortedString(alphaArrayOne).toLowerCase() ===
    charactersToSortedString(alphaArrayTwo).toLowerCase()
  ) {
    return true;
  }

  return false;
}

console.log(isAnagram("", ""));
console.log(isAnagram("asshat", "shatas"));
console.log(isAnagram("killer", "rellik"));
console.log(isAnagram("asshat", "asshatter"));
console.log(isAnagram("hatter", "thatreo"));
console.log(isAnagram("oreo", "oreo"));
