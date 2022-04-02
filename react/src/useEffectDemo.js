import React, {useState, useEffect} from 'react'
import MouseOver from './MouseOver';

function UseEffectDemo() {

    let [count, setCount] = useState(0);
    let [text, setText] = useState("");
    let [display, setDisplay] = useState(true);

    console.log('Render happened!');


    useEffect(() => {        
       console.log("useEffect called!!");
       document.title= "Count " + count;

    //    return{
         
    //    }
    },[count]);

    return (
        <div>
            <p>Count :{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <input onChange={(e) => setText(e.target.value)} value={text}/>
            <button onClick={() => setDisplay(!display) }>Toggle Display</button>
            {display && <MouseOver/>}
        </div>
    )
}

export default UseEffectDemo;
