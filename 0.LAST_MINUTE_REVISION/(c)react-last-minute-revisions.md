1.<Suspense fallback={<h1>loading..</h1>}>
1. "useLayoutEffect is a version of useEffect that fires before the browser repaints the screen."
2.  when you want a default implementation of `shouldComponentUpdate()`
3.  Virtual DOM

4. You cannot directly make a useEffect function asynchronous because useEffect is not designed to handle promises. However, you can achieve this by defining an async function inside the useEffect and calling it. Here's how you do it:

Steps to Use Async Functions in useEffect:
Define an async function inside the useEffect.
Call the async function inside the useEffect.
```js
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const result = await response.json();
        setData(result.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
```