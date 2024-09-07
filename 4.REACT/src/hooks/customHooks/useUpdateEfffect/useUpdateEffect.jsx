import React from 'react'
import { useRef, useEffect } from 'react';
/* 
  Implement useUpdateEffect() that it works the same as useEffect() except that it skips running the callback on first render.
*/
const useUpdateEffect = (callback, deps) => {
    const ref = useRef(false);
    useEffect(() => {
      if(ref.current){
        ref.current= true;
      }
      return ()=> {
          callback();
      }
    }, [deps, callback])
    
  return (
    <div>useUpdateEffect</div>
  )
}

export default useUpdateEffect;