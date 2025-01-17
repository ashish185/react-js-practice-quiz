## SCOPE
---

1. Global Scope  
   - Variables accessible anywhere in the code.  
   - Declared outside of functions or blocks.

2. Function Scope  
   - Variables declared inside a function (`var`, `let`, `const`) are limited to that function.  

3. Block Scope  
   - Variables declared with `let` and `const` inside `{}` are confined to that block.  
   - `var` is not block-scoped.

4. Lexical Scope  
   - Inner functions can access variables from their outer functions due to their position in the code.

5. Module Scope  
   - Variables in ES6 modules are scoped to that module and are only accessible if exported.

6. Closures  
   - Functions can "remember" variables from their lexical scope, even after the outer function has returned.

---

Tip: Use `let` and `const` to avoid global scope leaks and better control visibility!

## Q1: What if outer(let) or inner(var) has variable has same name?
```js
let xy = 20;
if (true) {
    /* var xy=10; //give error because Var hoist here */
    let xy = 40; 
    console.log(xy);//40
}
function xyz() {
    var xy = 30; //As var is function scoped do not give error here
    console.log("xy", xy); //xy 30
}
xyz();
```