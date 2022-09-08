import React, { useState } from 'react';

const WithCounter = (WrappedComponent, initialValue) => {
  const Counter = (props) => {
    const [counter, setCounter] = useState(initialValue);

    const updateCounter = () => {
      setCounter((prev) => prev + 1);
    };
    return (<WrappedComponent counter={counter} setCounter={updateCounter} {...props} />);
  };
  return Counter;
};

export default WithCounter;
