import React, {useState, useEffect, useLayoutEffect} from 'react'

function UseEffectDemo() {

    let [count, setCount] = useState(0);
   
    console.log('Render happened!');

    useEffect(() => {        
       console.log("useEffect called!!");
    },[count]);

    useLayoutEffect(() => {        
        console.log("useLayoutEffect called!!");
     },[count]);

    return (
        <div>
            <p>Count :{count}</p>
            <button onClick={() => setCount(count => count + 1)}>Increment</button>
        </div>
    )
}

export default UseEffectDemo;
