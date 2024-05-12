import WithDimensionHoc from "./WithDimensionHoc";
import "./hoc.scss";
import { forwardRef } from "react";

const DemoWidth = (props, ref) => {
  return (
    <div ref={ref} className="comp1">
      Comp1
      <p>The width of the container is {`${props.width}`}</p>
    </div>
  );
};
export default WithDimensionHoc(forwardRef(DemoWidth));
