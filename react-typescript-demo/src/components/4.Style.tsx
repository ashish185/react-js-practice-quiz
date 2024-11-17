import React from 'react';

const StylesContainer = () => {
  return (
    <div>
      <hr />
      <StylesChild styles={{ padding: '2px', border: '1px solid black' }} />
    </div>
  );
};
/**
 * Learning Style props
 */
type StyleChildProps = {
  styles: React.CSSProperties;
};

const StylesChild = ({ styles }: StyleChildProps) => {
  return <div style={styles}>Styles child</div>;
};

export default StylesContainer;
