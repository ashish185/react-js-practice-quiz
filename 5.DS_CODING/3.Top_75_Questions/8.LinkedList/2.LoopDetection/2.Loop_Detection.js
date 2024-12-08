class Node {
  constructor(val) {
    this.data = val;
    this.next = null
  }
};

const node1 = new Node(10);
const node2 = new Node(20);
const node3 = new Node(30);
const node4 = new Node(40);
const node5 = new Node(50);

const start = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

let slowPointer= start;


var hasCycle = function(head) {
  if(!head){
      return false;
  }
  let turtle=head;
  let hare= head;
  let res;
  let i=0;
  while(hare.next !==null && hare!==null){
      hare.next= hare.next.next;
      turtle.next= turtle.next;
      if(hare.next === turtle.next){
          res=hare.next;
          return true;
      }
  }
  return false;
};

//10->20->30->40->50->60->70
/* 
  10->20->30->40->50->60->70->10
  -
          -
       -      
          -       -
              -       -
                  -       -
                      -       -
                          -      
      - 
*/


