import React from 'react';

const Events = () => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {};
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {};
  return (
    <div>
      Events
      <MyComponent handleClick={handleClick} onChangeInput={onChangeInput} />
    </div>
  );
};

type MyComponentProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onChangeInput: (event:React.ChangeEvent<HTMLInputElement>) => void;
};

const MyComponent = ({ handleClick, onChangeInput }: MyComponentProps) => {
  return (
    <div>
      <button onClick={handleClick}>AnyButton</button>
      <input onChange={onChangeInput}></input>
    </div>
  );
};

export default Events;
