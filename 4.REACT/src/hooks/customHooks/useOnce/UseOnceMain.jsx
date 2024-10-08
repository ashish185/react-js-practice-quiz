import React, { useEffect, useState } from 'react'
import useOnce from './useOnce';
import Child from './Child';
/* 
Here is a simple problem, implement useEffectOnce() as the name says itself, it runs an effect only once.
*/
const UseOnceMain = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('Parent Use Effect');
        return () => {
            console.log('Parent Clean up');
        };
    });

    useOnce(() => {
        console.log('Once Use Effect is called');
    })

    return (
        <div>
            <button
                onClick={() => {
                    setCount((count) => count + 1);
                }}
            >
                Increase Count
            </button>
            <div>
            {count}
            </div>
            <Child />
        </div>
    )
}

export default UseOnceMain;