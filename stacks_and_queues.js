function reverseString(string) {
  let stringArray = [];
  for (let i = 0; i < string.length; i++) {
    stringArray.push(string[i]);
  }
  let reversedString = "";
  while (stringArray.length > 0) {
    reversedString = reversedString + stringArray.pop();
  }
  return reversedString;
}

function popFromQueue(queue) {
  const shiftsNeeded = queue.length - 1;
  for (let i = 0; i < shiftsNeeded; i++) {
    queue.push(queue.shift());
  }
  return queue.shift();
}

class Queue {
  constructor(arr = []) {
    this.queue = arr;
  }

  get value() {
    return this.queue;
  }

  set value(queue) {
    this.queue = queue;
  }

  enqueue(val) {
    this.queue.push(val);
    return null;
  }

  dequeue() {
    const firstValue = this.queue.shift();
    return firstValue;
  }
}

myQueue = new Queue([1, 2]);
console.log(myQueue.value);
console.log(myQueue.enqueue(3));
console.log(myQueue.value);
console.log(myQueue.enqueue(4));
myQueue.value = [3, 2, 1];
console.log(myQueue.value);
//console.log(myQueue.queue);
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
