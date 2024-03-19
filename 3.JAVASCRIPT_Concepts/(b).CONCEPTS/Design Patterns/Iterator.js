/* Iterator pattern : It allows us defines some rules how we want to iterate over some collection of objects*/

const items=[1,"2",false,3.2];

function Iterator(obj){
    this.obj = obj;
    this.index= obj.length-1
}

Iterator.prototype= {
    hasNext: function(){
        return this.index >=0
    },
    next: function(){
        return this.obj[this.index--];
    }
}
const iter = new Iterator(items);
while(iter.hasNext()){
    console.log(iter.next());
}
/* 
3.2 false 2 1 */