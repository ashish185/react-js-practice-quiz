// User defined class node 
function Node(val) {
        this.val = val;
        this.next = null
}

// linked list class 
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(element) {
        let node = new Node(element);
        let current;
        // if list is Empty add the 
        // element and make it head 
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            // add node 
            current.next = node;
        }
        this.size++;
    }

    display(){
       let current = this.head;
        while(current){
            console.log(current.val);
            current=current.next;
        }
    }
}

module.exports = LinkedList