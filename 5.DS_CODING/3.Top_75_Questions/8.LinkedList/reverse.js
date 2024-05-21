
// https://leetcode.com/problems/reverse-linked-list/
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
 var reverse = function(head) {
    if(!head || !head.next){
        return head;
    }
    let prev=head;
    let current= head.next;
    let next= current.next;
    while(current!==null){
        next = current.next;
        current.next= prev;
        prev=current;
        current=next;
    }
    head.next=null;
    head= prev;
    return head;
};
const addr=reverse(l1.head);
display(addr);