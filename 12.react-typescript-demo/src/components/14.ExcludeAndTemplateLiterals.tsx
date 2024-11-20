import React from "react";

/* 
Template Literals Example:
We want to exclude the invalid "center-center" position while keeping valid positions.
*/
export const ExcludeAndTemplateLiterals = () => {
  return (
    <div>
      <div>ExcludeAndTemplateLiterals</div>
      {/* Valid position */}
      <Toast position="left-center" />
      {/* Invalid position: TypeScript should throw an error */}
      {/* <Toast position="center-center" /> */}
      {/* Standalone valid position */}
      <Toast position="center" />
    </div>
  );
};

// Define allowed horizontal and vertical positions
type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = "top" | "center" | "bottom";

// Template Literals and Exclude to define valid positions
type PositionProps = {
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center">
    | "center"; // Add "center" as a standalone valid position
};

const Toast = ({ position }: PositionProps) => {
  return <div>Toast position is {position}</div>;
};
