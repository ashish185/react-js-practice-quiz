import { useEffect, useRef, useState } from "react";

const WithDimensionHoc = (Component) => {
  const Comp = (props) => {
    const ref = useRef();
    const [width, setWidth] = useState(0);
    useEffect(() => {
        if(ref.current){
            setWidth(() => ref?.current?.offsetWidth);
        }
    }, [ref]);

    return <Component ref={ref}  width={width} {...props} />;
  };
  return Comp;
};

export default WithDimensionHoc;
