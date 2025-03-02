/* There are 3 ways to describe async test
1. using done callback.
2. returning promise.
3. pass an Async function
*/
it("Async using done", (done) =>{
    /*   thrown: "Exceeded timeout of 5000 ms for a test. */
    setTimeout(done,500);
})
it("Async using Promise", () =>{
    return new Promise(
        resolve => setTimeout(resolve,1200)
    )
})
// it("We can done with redux saga dealy method(it returns promise",()=>
//     /* async ()=>await delay(100) */)