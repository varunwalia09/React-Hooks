import React from 'react';
import './App.css';

// import Counter from './Components/Counter';
// import Reducer from './Components/Reducer'
// import Effect from './Components/Effect'
// import Ref from './Components/Ref';
import Indian from './Components/useContext/Indian';
import MoneyState from './Components/useContext/context/MoneyState';
import Callback from './Components/Callback/Callback';


const App = ()=> {
  return (
    <MoneyState className="App">
    
    {/* <Indian/> */}
      {/* <Counter /> */}
      {/* <Reducer/> */}
      {/* <Effect/> */}
      {/* <Ref/> */}
      <Callback/>
    </MoneyState>
  );
}


export default App;
