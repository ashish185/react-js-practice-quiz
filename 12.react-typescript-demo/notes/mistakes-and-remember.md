1. ## Entered the type with commas
```js
type GreetProps = {
  persons: {
    firstName: string; /* Not 'string' */
    lastName: string;
  }[];
};
```

2. ## Pattern where equals to come and where not
- In case of type, it will create like an object in js
```js
type ACTION_TYPE = {
  actionType: string;
  payload: number;
};
```
- In case of enum, interface. It does not create like object
1. Here values Sepearated by comma

```js
enum COUNT {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
}

```
