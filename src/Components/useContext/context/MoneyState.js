
import MyContext from "../context/MyContext"

const MoneyState = (props ) => {
  const yojna = {
    money:10000,
    rashan:true,
    pention:500,
  };
  return (
    <MyContext.Provider 
     value={{yojna}}>
       
       {props.children}
    </MyContext.Provider >
  )
}

export default MoneyState