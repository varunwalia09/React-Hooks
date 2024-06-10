import React, { useEffect } from 'react'

const Child = ({handleClick}) => {
    useEffect(() => {
      console.log("useEffect is running")
    }, [handleClick])
    
  return (
    <div>Child</div>
  )
}

export default Child