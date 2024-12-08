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


const Hello = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

// A simple HOC that logs a message when a component mounts
const withLogger = (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      console.log(`${WrappedComponent.name} mounted`);
    }, []);

    return <WrappedComponent {...props} />;
  };
};

const EnhancedHello = withLogger(Hello);
