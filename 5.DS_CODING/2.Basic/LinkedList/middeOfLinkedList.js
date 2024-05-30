import Node from "./linkedList.js";

const head = new Node(10);
const node2 = new Node(20);
const node3 = new Node(30);

head.next = node2;
node2.next = node3;

const displayLinkedList = (head) => {
  let start = head;
  while(start !==null){
    console.log(start.value);
    start = start.next;
  }
};
displayLinkedList(head);