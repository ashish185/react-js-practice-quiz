## 2 questions in this hooks need to understand

##  What is the sequence of useEffect?
-> Child UseEffect -> Parent UseEffect -> Hook UseEffect (it's sequence depends whether it is called before useEffect of parent or after)

## The problem with the use effect without dependency is that it runs after every at every render
    useEffect(() => {
        console.log('Parent Use Effect');
        return () => {
            console.log('Parent Clean up');
        };
    });

    So solution to the above problem is useOnce it runs only first render

## Trick: Jo Clean up vo next call m run hota h
useEffect(() => {
    console.log("Hook use Effect");
    if (ref.current) {
      callback();
      return;
    };

    return () => {
      console.log('Hook clean up');
      ref.current = false;
    };
}, [dependency]);