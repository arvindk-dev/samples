import React, { useEffect, useRef, useState, useImperativeHandle } from 'react';

function Name(props, ref) {
    console.log("Rendered Name!");
 
  

    let [strName, setName] = useState("John");
  
    let refName = useRef();
    // useImperativeHandle(ref, () =>{
    //     return{
    //     Name: refName.current.value,
    //     Focus: () => refName.current.focus()
    //     }
    // },[strName]);

  return <div>
        {/* <input ref={refName} value={props.Name} onChange={ (e) => props.handleChange(e.target.value)}/> */}
        {/* <input ref={refName} value={strName} onChange={ (e) => setName(e.target.value)}/> */}

                <input value={props.Name} onChange={ (e) => props.handleChange(e.target.value)}/>

  </div>;
}

//export default React.forwardRef(Name);
export default React.memo(Name);


