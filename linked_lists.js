class LinkedList {
  constructor() {
    this.start = null;
    this.end = null;
  }

  createNode() {
    return { value: null, next: null };
  }

  log() {
    let current = this.start;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }

  push(nodeVal) {
    let newNode = this.createNode();
    if (this.start === null) {
      this.start = newNode;
    }
    newNode.value = nodeVal;

    if (this.end !== null) {
      this.end.next = newNode;
    }
    this.end = newNode;
  }
}

function findPreviousNode(linkedList, node) {
  // debugger;
  let currentNode = linkedList.start;
  while (currentNode.next !== node) {
    currentNode = currentNode.next;
  }
  return currentNode;
}

function reverseList(linkedList) {
  let newStart = linkedList.end;
  if (newStart === null) return null;

  let currentNode = newStart;
  while (currentNode !== linkedList.start) {
    const previousNode = findPreviousNode(linkedList, currentNode);
    currentNode.next = previousNode;
    currentNode = previousNode;
  }
  currentNode.next = null;
  linkedList.end = currentNode;
  linkedList.start = newStart;
}

function removeDuplicates(linkedList) {
  let valuesArray = [];
  let currentNode = linkedList.start;
  let lastNode = null;
  while (currentNode !== null) {
    if (valuesArray.includes(currentNode.value)) {
      lastNode.next = currentNode.next;
      if (currentNode === linkedList.end) {
        linkedList.end = lastNode;
      }
    } else {
      valuesArray.push(currentNode.value);
    }
    lastNode = currentNode;
    currentNode = currentNode.next;
  }
}

let testList = new LinkedList();

testList.push("potatoes");
testList.push("apples");
testList.push("pomegranites");
testList.push("apples");

testList.log();
removeDuplicates(testList);
testList.log();
console.log(testList.end);

reverseList(testList);
testList.log();
