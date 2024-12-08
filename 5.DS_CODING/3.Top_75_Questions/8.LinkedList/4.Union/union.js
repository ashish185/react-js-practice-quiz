const LinkedList = require('../LinkedList');
//1.Shorten the problem
//1->2
//4->2

//Union= 1->2->4
//intersection= 2

const list = new LinkedList();
const list2 = new LinkedList();
list.add(1); list.add(2);
list2.add(4); list2.add(2);

function getUnion(head1, head2) {
    let ptr = head1;
    let ptr2 = head2;
    const mp = new Map();
    while (ptr.next !== null) {
        mp.set(ptr.val, ptr.val);
        ptr = ptr.next;
    }
    mp.set(ptr.val, ptr.val);
    while (ptr2 !== null) {
        const val = ptr2.val;
        if (!mp.get(val, val)) {
            ptr.next = ptr2
            ptr = ptr2;
        }
        ptr2 = ptr2.next;
    }
    ptr.next = null;
    return head1;
}
function display(head) {
    let curr = head;
    while (curr) {
        console.log(curr.val);
        curr = curr.next;

    }
}
let head = getUnion(list.head, list2.head);
display(head);

/* Time Complexity: O(m+n).
Here ‘m’ and ‘n’ are number of elements present in first and second lists respectively. 
Auxiliary Space:O(m+n).
*/
