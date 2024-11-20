1. ## What is the type of children in React?
Ans: children: React.ReactNode;

2. ## What is this React.ComponentProps<'button'>?

3. ## How to remove a type?

3. ## Difference between Omit and Exclude?

4. ## What does this signify?
```js
Omit<React.ComponentProps<'button'>, 'children'>
```
5. ## What will happen if we want to use the component props of Greet in CustomComponent?
```js
const customComponent = (props:React.ComponentProps<typeof Greet>) => <div></div>