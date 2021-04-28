class PriorityQueue {
  constructor() {
    this.value = [];
  }

  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    this.value.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let lastIndex = this.value.length - 1;
    const element = this.value[lastIndex];
    while (lastIndex > 0) {
      let parentIndex = Math.floor((lastIndex - 1) / 2);
      let parent = this.value[parentIndex];

      if (element.priority >= parent.priority) {
        break;
      }
      this.value[parentIndex] = element;
      this.value[lastIndex] = parent;
      lastIndex = parentIndex;
    }
  }

  dequeue() {
    // get first element
    const min = this.value[0];
    const end = this.value.pop();
    if (this.value.length > 0) {
      this.value[0] = end;

      // sink down
      this.sinkDown();
    }

    return min;
  }

  sinkDown() {
    let index = 0;
    const length = this.value.length;
    const element = this.value[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;

      // values to store varaibles at the left and right indexes
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.value[leftChildIndex];
        if (leftChild.priority < element.priority) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.value[rightChildIndex];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.value[index] = this.value[swap];
      this.value[swap] = element;
      index = swap;
    }
  }
}

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

let ER = new PriorityQueue();

ER.enqueue("common injury", 4);
ER.enqueue("High fever", 2);
ER.enqueue("cough", 3);
ER.enqueue("broken heart", 1);
console.log(ER);
console.log("=====================");
ER.dequeue();
console.log(ER);
