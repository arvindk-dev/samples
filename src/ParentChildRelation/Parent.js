import React, { useState } from 'react';
import * as Child  from './Child';

let Parent = React.memo(() => {
    let [count, setCount] = useState(0);
    //let [text, setText] = useState("");
    console.log("Rendering Parent!");
    console.log(Child);
  return <div>
      Parent Count : {count}
      <button onClick={() => setCount(count => count +1)}>Increment</button>
      
      <Child.Child1 count={count}/>
      <Child.Child2/>
  </div>;
});

export default Parent;
