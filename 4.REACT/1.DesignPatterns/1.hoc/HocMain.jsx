import Comp1 from "./Comp1";
import { useEffect, useRef, useState } from "react";
import DemoWidth from "./DemoWidth";

const HocMain = () => {
//   return <Comp1 ref={ref} width={width} />;
  return <DemoWidth />;
};

export default HocMain;
