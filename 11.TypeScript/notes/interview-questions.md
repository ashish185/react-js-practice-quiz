1. Can we run ts file directly on browser?
No
```html
<script src="./1.first.ts"></script>
```
Return error: Refused to execute script because its MIME type ('video/vnd.dlna.mpeg-tts') is not executable.

2. What's the difference between Tuple and Array?
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
3. Create any enum?
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

