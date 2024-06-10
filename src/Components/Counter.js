import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className='main'>
      <h1 className='count1' >{count}</h1>
      <button className="I" onClick={increment}>+</button>
      <button  className="D" onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
