class Node {
  constructor(val) {
    this.data = val;
    this.next = null
  }
};

const node1 = new Node(10);
const node2 = new Node(20);
const node3 = new Node(30);

node1.next = node2;
node2.next = node3;

let start = node1;

let ptr = start;
while (ptr !== null) {
  console.log(ptr.data);
  ptr = ptr.next;
}

