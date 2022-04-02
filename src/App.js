import { useState } from 'react';
import './App.css';
import UseCallBackDemo from './useCallBackDemo/useCallBackDemo';
import UseEffectDemo from './useEffectDemo';
import UseEffectFetchDemo from './useEffectFetchDemo';
import UseReducerDemo from './useReducerDemo';
import UseLayoutEffectDemo from './LayoutEffectDemo/useLayoutEffectDemo'
import UseEffectDemo1 from './LayoutEffectDemo/useEffectDemo'
import UseStateDemo from './UseStateDemo';
import Parent from './ParentChildRelation/Parent';

function App() {
  
  console.log("Rendering App component!");
  //const [text, setText] = useState("");

  return (
    <div className="App">

    {/* <UseEffectDemo/> */}
    {/* <UseReducerDemo/> */}
    {/* <UseEffectFetchDemo/> */}
    {/* <UseLayoutEffectDemo/> */}
    {/* <UseEffectDemo1/> */}
     <UseCallBackDemo/> 
    {/* <UseStateDemo/> */}
    {/* <input value={text} onChange={(e) => setText(e.target.value) }/> */}
    {/* <Parent/> */}
   

    </div>
  );
}

export default App;
