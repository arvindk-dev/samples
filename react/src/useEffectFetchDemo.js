import React, { useEffect, useState, useLayoutEffect } from 'react'

function UseEffectFetchDemo() {

    console.log("Render");
    let [todo, setTodo] = useState({});
    let [number, setNumber] = useState(1);
    let [users, setUsers] = useState([{name:"React"}]);

    useEffect(()=> {
        //let apiUrl = "https://jsonplaceholder.typicode.com/todos/" + number + "/users/,.,." + users;
        fetch(`https://jsonplaceholder.typicode.com/todos/${number}`)
        .then(response => response.json())
        .then(json => setTodo(json))
    },[number]);

    useLayoutEffect(()=> {
        //fetch(`https://jsonplaceholder.typicode.com/users`)
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => response.json())
        .then(json => {setUsers(json); console.log(json);})
    }, []);
    
    return (
        <>
            {/* <h3>Todo: {number}</h3>
            <input type="number" onChange={(e) => setNumber(e.target.value)} value={number}/>
            {todo.id ?
            <React.Fragment>
                <p>Title: {todo.title}</p>
                <p>Status: {todo.completed ? "Done" : "Not Done"}</p>
            </React.Fragment> 
            :<React.Fragment/>
            } */}

            {/* <ul>
            {users.map(user => 
                <li>{user.name}</li>
            )}
            </ul> */}

            <table>
                <tbody>
                
                {users.map((user,i) => 
                
                <tr  key={i}>
                <td>
                    {/* <>Name {i}</> */}
                    <>{user.title}</>
                </td>
                </tr>
                )}
               
                </tbody>
            </table>
        </>
    )
}

export default UseEffectFetchDemo
