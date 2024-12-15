## React Events
```js
React.MouseEvent<HTMLButtonElement>,
React.ChangeEvent<HTMLInputElement>,
styles= React.CSSProperties,

```

## UseState:
- Use State use angle brackets
```js
useState<null | AuthUser>(null);
```

## type vs interface vs enums

1. - ### type
```js
/* type always be created like objects in javascript */
/* 
Note: const ACTION_TYPE= {actionType: 'INCREMENT'} but in type it {actionType: string}
*/
type ACTION_TYPE = {
  actionType: string;
  payload: number;
};
```
- In case of enum, interface. It does not create like object
2. - ### enum
Here values Separated by comma

```js
enum COUNT {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
}
```
3. - ### Interface
Here values Separated by comma

```js
interface COUNT {
  INCREMENT: string,
  DECREMENT: string,
}
```