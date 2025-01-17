1. ## Can we run ts file directly on browser?
No
```html
<script src="./1.first.ts"></script>
```
Return error: Refused to execute script because its MIME type ('video/vnd.dlna.mpeg-tts') is not executable.

2. ## What's the difference between Tuple and Array?
- Tuple:
    1. Fixed length, cannot add or remove.
    2. Can have different data types elements.
```js
let response: [number, string] = [200, "Success"];
```
- Array
    1. does not have fixed length, cannot shrink or expand.
    2. Array: Generally holds elements of the same type. Though you can use a union type, it isn’t as structured as a tuple.
    ```typescript
    let mixedArray: (string | number | boolean)[] = ["John", 30, true];
    ```
3. ## Create any enum?
Ans: it has equals and it does not end with semicolon like interface or type
```js
enum StatusCode {
    Success = 200,
    NotFound = 404,
    ServerError = 500
}

// For comparison.
type Person = { name: string; age: number };
```

4. ## Why Use <T extends {}>?

In TypeScript, <T extends {}> is a constraint applied to a generic type parameter T. Let's break it down:

1. Generic T
T is a generic type parameter, which means it can represent any type (e.g., string, number, or a custom object).
Generics are used to make components, functions, or types reusable with different type constraints.
```js
function logProperties<T extends {}>(obj: T): void {
    console.log(Object.keys(obj));
}

logProperties({ name: 'John', age: 30 }); // ✅ Works
logProperties(123); // ❌ Error: Type 'number' does not satisfy the constraint '{}'.

```
2. Constraint: extends {}
The extends {} constraint restricts T to only types that are objects.
In TypeScript, {} means "non-null and non-undefined." It does not mean "any object."
Why Use <T extends {}>?
