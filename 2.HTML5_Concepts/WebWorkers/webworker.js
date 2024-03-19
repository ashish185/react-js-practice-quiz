/* 
    JavaScript is single threaded lang.
    it means you can't execute two scripts at a time.

    Q) We using async for making the time consuming, is it a different thread?
    Ans No it is NON blocking, but not a different thread
*/
this.onmessage = function(e){

    if(e.data.addThis !== undefined){
        this.postMessage({result: e.data.addThis.num1 + e.data.addThis.num2})
    }
}