import React from 'react'
import State from './State'


const Indian = () => {


  const yojna = {
    money:10000,
    rashan:true,
    pention:500
  }
  return (

    <div>Indian
      <State yojna={yojna}/>
    </div>
  )
}

export default Indian