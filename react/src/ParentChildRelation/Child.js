import React from 'react';

export function Child1(props) {
    console.log("Rendering Child!");
  return <div>Child Count : {props.count}</div>;
}

//export default React.memo(Child);
//export default Child1;

export function Child2(props){
    console.log("Child2");
    return<div>Child 2</div>;
}


export function Child3(props){
    console.log("Child3");
    return<div>Child 2</div>;
}