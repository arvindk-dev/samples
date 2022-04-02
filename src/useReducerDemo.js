import React, {useReducer} from 'react'

let initialState = {
    count: 0,
    text: "",
};

let reducerFn = (currentState, action) => {
    switch (action.type){
        case "SET_COUNT":
            return {...currentState, count :action.payload.value};       
        case "SET_TEXT":
            return {...currentState, text :action.payload.value};
        default:
            return currentState;
    }   
};

function useReducerDemo() {
    console.log('Render happened!');
    let [state, dispatch] = useReducer(reducerFn, initialState);

    //let [state2, dispatch2] = useReducer(reducerFn, initialState);

    return (
        <div>
            <p>Count :{state.count}</p>
            <button onClick={() => dispatch({"type": "SET_COUNT", "payload": {value: state.count +1}})}>Increment</button>
            <button onClick={() => dispatch({"type": "SET_COUNT", "payload": {value: 0}})}>Reset</button>
            <input onChange={(e) => dispatch({"type": "SET_TEXT", "payload" : {value: e.target.value}})} value={state.text}/>
        </div>
    )
}




export default useReducerDemo
