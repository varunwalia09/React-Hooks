import React, { useState } from 'react'
import Child from './Child';


const Callback = () => {
 const [counter1, setCounter1] = useState(0)
 const [counter2, setCounter2] = useState(0)
  const handleClick = ()=> setCounter1(counter1+1);


  return (
    <div>
      <h1>{counter2}</h1>
      <Child handleClick={handleClick}/>
      <button onClick={()=> setCounter2(counter2+1)}>Click me</button>
    </div>
  )
}

export default Callback