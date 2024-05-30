import React, { useEffect, useState } from 'react'
import useUpdateEffect from './useUpdateEffect';

const UseUpdateEffectMain = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('UseEffect runs', count);
        return () => {
            console.log('Return of use effects', count);
        }
    },[count]);

    useUpdateEffect(() => {
        console.log('UseUpdate ** runs at first time');
    }, [count]);

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
        </div>
    )
}

export default UseUpdateEffectMain;