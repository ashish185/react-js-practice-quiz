import './hoc.scss';
import { useEffect, useRef, useState } from "react";

const Comp1 = (props) => {
  const ref = useRef();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(() => ref?.current?.offsetWidth);
  }, [ref]);

  return (
    <div ref={ref} className="comp1" {...props}>
      Comp1
      <p>The width of the container is {`${width}`}</p>
    </div>
  );
};
export default Comp1;
