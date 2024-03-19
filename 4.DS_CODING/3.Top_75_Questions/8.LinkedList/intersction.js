const LinkedList = require('./LinkedList');
//1.Shorten the problem
//1->2
//4->2

//Union= 1->2->4
//intersection= 2

const list1 = new LinkedList();
const list2 = new LinkedList();
list1.add(1); list1.add(2);
list2.add(4); list2.add(2);

const getIntersection=(list1,list2) =>{
    console.log(list1,list2);
    let ptr1=list1.head;
    let ptr2=list2.head;
    let mp=new Map();
    while(ptr1!==null){    
        mp.set(ptr1.val,ptr1.val)
        ptr1=ptr1.next;
    }
  
    const nList= new LinkedList();
    while(ptr2){
        if(mp.get(ptr2.val)){
            nList.add(ptr2.val)
        }
        ptr2=ptr2.next;
    }
    console.log(nList);
    //display
    let ptr=nList.head;
    while(ptr){
        console.log(ptr.val);
        ptr=ptr.next;
    }
}
getIntersection(list1,list2);