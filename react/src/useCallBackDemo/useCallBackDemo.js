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

    // let updateName= (val) => {
    //   setName(val)
    // };  
    
    // let updateAge = (val) => {
    //   setAge(val)
    // };

    let updateName= useCallback((val) => {
      setName(val)
    }, [strName]);

    let updateAge= useCallback((val) => {
      setAge(val)
    }, [intAge]);

    let geLength = useMemo(() => {
      console.log("Calculating Length");
      for(let i =0; i<1000000000; i++){
      }
      return strName.length;
    },[strName]);

    // let geLength = () => {
    //   console.log("Calculating Length");
    //   for(let i =0; i<10000000000; i++){
    //   }
    //   console.log(strName.length);
    // };
    
  return <div>
      <Title Title={strTitle}/>
      <Name Name={strName} handleChange={updateName}/>   
      
      <Age Age={intAge} handleChange={updateAge}/>    

      <br/>
      <button onClick={() => setUpdate(!blnUpdate)}>Update</button>
      <span>{geLength}</span>
  </div>;
}

export default UseCallBackDemo;
