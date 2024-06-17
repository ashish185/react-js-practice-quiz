import React from 'react'
import { useRef, useEffect } from 'react';

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