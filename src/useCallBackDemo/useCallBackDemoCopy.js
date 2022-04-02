import React, { useMemo } from 'react';
import { useCallback, useRef, useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Age from './Age';
import Name from './Name';
import Title from './Title';

function UseCallBackDemo() {

    let [strTitle, setTitle] = useState("UseCallBack");
    let [strName, setName] = useState("John");
    let [intAge, setAge] = useState("25");
    let [blnUpdate, setUpdate] = useState(false);
    console.log("Rendered Parent!");

    let updateName= (val) => {
      setName(val)
    };  
    
    let updateAge = (val) => {
      setAge(val)
    };

    // let updateName= useCallback((val) => {
    //   setName(val)
    // }, [strName]);

    // let updateAge= useCallback((val) => {
    //   setAge(val)
    // }, [intAge]);

    // let geLength = useMemo(() => {
    //   console.log("Calculating Length");
    //   //for(let i =0; i<100000000; i++){

    //   //}
    //   return strName.length;
    // },[strName]);

    // let refName = useRef();
    // let ChildName = "";
    // useEffect(() => {
    //   //ChildName = refName.current.Name;
    //   refName.current.Focus();
    //   //setName(refName.current.Name);
    // }, [refName.current?.Name]);
    // console.log(refName);
    
  return <div>
      <Title Title={strTitle}/>
      <Name Name={strName} handleChange={updateName}/>
      {/* <input id ="name" ref={refName} value={strName} onChange={ (e) => setName(e.target.value)}/> */}
      {/* <Name ref= {refName} /> */}
       {/* Name :{refName.current?.Name} */}
       {/* Name :{strName} */}
      
      <Age Age={intAge} handleChange={updateAge}/>     

      {/* Name Length: {geLength} */}

      <br/>
      <button onClick={() => setUpdate(!blnUpdate)}>Update</button>
  </div>;
}

export default UseCallBackDemo;
