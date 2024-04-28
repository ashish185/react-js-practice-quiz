const LinkedList = require('./LinkedList');
let l1= new LinkedList();
l1.add(1);
l1.add(2);
l1.add(3);
l1.add(4)
l1.display();
console.log(l1.head);
function display(head){
    let current = head;
     while(current){
         console.log(current.val);
         current=current.next;
     }
 }
function reverse(start){
    let curr, prev,next;
    curr=start;
    prev=null;
    next=null;

    while(curr!==null){
        next=curr.next;
        curr.next=prev;
        prev=curr;
        curr=next;
    }
    return prev;
}
const addr=reverse(l1.head);
display(addr);