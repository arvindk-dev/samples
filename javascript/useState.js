console.log("Custom UseState");


let React = (() => {
    let val ;
    return {
        render (Component){
            const Comp = Component();
            Comp.render();
            return Comp;
        }
        ,
        useState(initialValue) {
            val = val || initialValue;
            // function state(){
            //     return val;
            // }
        
            function setState(newVal){
                val = newVal;
            }
            
            return[val, setState];
        }
}   
})();


function Counter() {
    const [count, setCount] = React.useState(0)
    return {
      click: () => setCount(count + 1),
      render: () => console.log('Count:', { count })
    }
}
let App
App = React.render(Counter)
App.click()
App = React.render(Counter)

// var [count, setCount] = React.useState(0);
// console.log(count);
// setCount(1);
// console.log(count);
