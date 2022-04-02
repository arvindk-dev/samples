import React from 'react';
import { useState } from 'react';

function UseStateDemo() {
    // let a =0;
    // a=5;

    let [a, setValue] = useState(0);
    // let arr= useState(0);
    // a = arr[0];
    // setValue = arr[1];
    //a = 5;

    console.log("Rendering component!");

    let updateValue = () => {
    //a = 5;
    setValue(5);
    }

    let [count, setCount] = useState(0);
    let [text, setText] = useState("");
    let [items, setItems] = useState([1,2,3]);
    let [obj, setObject] = useState({firstName: "React", lastName: "JS"});

    

    let updateObject = (val) => {
        obj.firstName = val;
        setObject(obj);

        // objNew = {...obj, MiddleName:e.target.value}
        // let objNew = {
        //   firstName: "React",
        //   lastName: "JS",
        //   firstName: "aaa",
        //   MiddleName:e.target.value //"Reacta"
        // }
        // objNew = {
        //   firstName: "aaa",
        //   lastName: "JS",
        //   MiddleName:""
        // }
    }

    let RemoveItems = () => {
        //items.pop();    
        //setItems([...items]);
        //setItems(items);
        //setItems(items.filter());
    };

    let IncrementByOne = prevcount => {
        return prevcount +1;
    }

    let IncrementByFive = () => {
        for(let i=0; i<5; i++){
        //setCount(IncrementByOne);
        setCount((prevCount) => { 
            console.log(prevCount);
            return prevCount+1
        });        
        }
    };

    let ResetTo5 = () => {
        // setCount((prevcount) => {
        // if(prevcount !=5)  
        // return 5
        // });
        setCount(5);
    }
  
  return <div>
      {/* State Value : {a}
    <br/>
    <button onClick={() => updateValue()}>Update State</button>

      <input type="text" onChange={(e) =>setObject({...obj, firstName:e.target.value})} value ={obj.firstName}/>
      <input type="text" onChange={(e) => setObject({...obj, lastName:e.target.value})} value ={obj.lastName}/>
      <h3>{obj.firstName} {obj.lastName}</h3> */}

      <div>Count: {count}</div>
      <button onClick={() => setCount(count +1)}>Increment</button>
      <button onClick={() => IncrementByFive()}>Increment by 5</button>
      <button onClick={() => ResetTo5()}>Reset to 5</button>

      {/* <div>Items</div>
      <ul>
      {items.map((x,i) => <li key={i}>{x}</li>)}
      </ul>      
      <button onClick={() => RemoveItems()}>Remove Items</button> */}
  </div>;
}

export default UseStateDemo;


