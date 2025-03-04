class Node {
    constructor(data) {
     this.data = data;
     this.left = null;
     this.right = null;
    }
}

const LEFT = 0;
const RIGHT = 1;

class TreeNode {
      constructor(value) {
        this.value = value;
        this.descendents = [];
        this.parent = null;
      }

      get left() {
        return this.descendents[LEFT];
      }

      set left(node) {
        this.descendents[LEFT] = node;
        if (node) {
          node.parent = this;
        }
      }

      get right() {
        return this.descendents[RIGHT];
      }

      set right(node) {
        this.descendents[RIGHT] = node;
        if (node) {
          node.parent = this;
        }
      }
    } 

    let tn= new TreeNode();
let n1= new Node();

    tn.left()