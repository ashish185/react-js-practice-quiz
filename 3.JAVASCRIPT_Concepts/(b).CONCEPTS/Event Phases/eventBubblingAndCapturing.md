## Introduction

1. Event bubbling is a method of event propagation in the HTML DOM API. When an element inside another element, 
and both elements have registered a handle event.

Some of the EVENTS do not propagate: focus, blur, resizing

```js
/* 
addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void
*/
//Type: click,
// listener: ()=>{console.log("grandparent");} i.e Function we call
// userCapture: False (By default

addEventListener(type, listener, useCapture)
// if useCapture is false or not given then Event bubbling
```
## Bubbling Questions:
Since by default event bubbling is true
```js
    <script>
        document.querySelector('.first').addEventListener('click', function () { alert('div') });
        document.querySelector('.second').addEventListener('click', function () { alert('form')});
        document.querySelector('.third').addEventListener('click', function () { alert('button')});
    </script>
```
- 1.  What is the order of alert when button is clicked?
Ans=> button -> form -> div

- 2.  What is the order of alert when form is clicked?
Ans=> form -> div

- 3.  How can I disable the event propagation?
Ans=> 
```js
    event.stopPropagation();
 ```

## Event Capturing
Since by default Event capturing is false.
```js
    <script>
        document.querySelector('.first').addEventListener('click', function () { alert('div') }, { capture: true });
        document.querySelector('.second').addEventListener('click', function () { alert('form')}, { capture: true });
        document.querySelector('.third').addEventListener('click', function () { alert('button')},, { capture: true });
    </script>
```
- 1.  What is the order of alert when button is clicked?
Ans=> div -> form -> button

- 2.  What is the order of alert when form is clicked?
Ans=>  div-> form


## Event Capturing & Bubbling Most tricky and confusing.(IMPORTANT)
- Note: Capturing is enable, then jo Order wise pehle caputre uski priority always high hogi
- 1.  What is the order of alert when button is clicked?
```js
    <script>
        document.querySelector('.first').addEventListener('click', function () { alert('div') }, { capture: true });
        document.querySelector('.second').addEventListener('click', function () { alert('form')}, { capture: true });
        document.querySelector('.third').addEventListener('click', function () { alert('button')}, { capture: false });
    </script>
```
Ans=> div -> form -> button
Explanation=> because in order div is first then form.

- 2.  What is the order above of alert when form is clicked?
Ans=> div => form
Explanation=> because in order div is first then form.

- 2.  What is the order of alert when button is clicked?
```js
    <script>
        document.querySelector('.first').addEventListener('click', function () { alert('div') }, { capture: true });
        document.querySelector('.second').addEventListener('click', function () { alert('form')}, { capture: false });
        document.querySelector('.third').addEventListener('click', function () { alert('button')}, { capture: false });
    </script>
```
Ans=> div => button => form
Explanation=> because in order div is first then form it will be first, for button and div bubbling will work therefore
just like bubble order will be bottom to up.