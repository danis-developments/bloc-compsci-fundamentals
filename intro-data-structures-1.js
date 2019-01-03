let people = ["Vivian", "Ava", "Josh", "Patrick", "Mike"];
people.push("Mary");

let joshPosition = people.indexOf("Josh");

let emilyPosition = people.indexOf("Emily");

people.splice(people.indexOf("Ava"), 0, "Melissa");

people.splice(people.indexOf("Patrick"), 1);

function removeElement(arr, element) {
  arr.splice(arr.indexOf(element), 1);
}

function removeElement(arr, element) {
  return arr.slice().splice(arr.indexOf(element), 1);
}
//console.log("done");

//people = people.splice(people.indexOf("Ava"),0,"Melissa");
