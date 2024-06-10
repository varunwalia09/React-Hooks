import React, { useRef } from 'react'


//click and focas to special input button 
const Ref=() =>{

    const myRef = useRef (null);
    console.log(myRef);

    const focusInput = ()=>{
        myRef.current.focus();
    }
  return (
    <div>
             
        <input  className='text' 
        ref={myRef} 
        type='text'/>
        {/* <h1 ref={myRef}>hello</h1> */}
        <button onClick={focusInput}>Focas</button>
    </div>
  )
}

export default Ref;