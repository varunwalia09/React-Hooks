import React, { useContext } from 'react'
import MyContext from './context/MyContext'



const Janta =({yojna})=> {
    // console.log("Janta ki Yojna",yojna)
    const data = useContext(MyContext)
    console.log("This data is comming for context",data)

  return (
    <div> 
        <h1>{yojna.money}</h1>
        <h1>{yojna.rashan ? "Rashan Milega": "rashan nahi milega"}</h1>
        <h1>{yojna.pention }</h1>

    </div>
  )
}

export default Janta;