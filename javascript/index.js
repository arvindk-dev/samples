console.log("From JavaScript file");

// let jsx = <div>React Jsx</div>;
// console.log(jsx);

// let fn = (x,y, fnCallback) => {
//     let result=x+y;
//     let msg = fnCallback(result);
//     console.log(msg);
//     //fn1(result);
   
//     //
//     //return result;
// }

// let fn1 = (result) => { console.log("Statement1 ", result)};
// let fn2 = (result) => { alert("Statement1 ", result)};

// fn(1,2, fn1 ); //Console log

// fn(1,2, fn2 ); //Alert window

// fn(3,4, (result) => { 
//     alert("Statement2 " + result)
//     return "from Callback fn";
//  });

//FETCH
// console.log("Fetching API data");
// let arrResponse = [];

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(data => {
//     console.log("Fetch resp: ", data);
//     let jsonData = data.json();
//     console.log("JSON data", jsonData);
//     return jsonData;

// })
// .then(jsonData => {
//     console.log(jsonData);
//     arrResponse = jsonData;
//     console.log("Obtained Response")
    
// })
// .catch(msg => console.log(msg));


// console.log("Items:", arrResponse.length);
// console.log("Some other operations!")


//ASYNC


// console.log("Fetching API data");
// //let arrResponse = [];

// (async function fnRoot(){
// let resp = await fetch('https://jsonplaceholder.typicode.com/posts');
// let arrResponse = await resp.json();
// console.log(arrResponse);
// console.log("Items:", arrResponse.length);
// console.log("Some other operations!");

// })();

// var promise1 = new Promise((resolve, reject) => {
//     //some operation
//     let a = 2;
//     if(a == 2){
//         resolve("Promise Resolved");
//     }
//     else    
//     reject("Promise Rejected");
// });

// console.log(promise1);

// promise1.
// then((msg) => {
//     console.log(msg)
// })
// .catch((msg) => {
//     console.log(msg)
// })

function fnX(){
    console.log("Function");
}

let obj1 = {
    firstName :"Sudarshan",
    lastName : "Reddy",  
    company: "Arcadix Infotech"
    // printName : function() {
    //     console.log(this.firstName.toUpperCase() + " " + this.lastName.toUpperCase());
    //     //console.log("Obj1's print method")
    // }
 }

let obj2 = {
   firstName :"Varun",
   lastName : "Tiwari",  
//    printName : function() {
//     console.log(this.firstName.toUpperCase() + " " + this.lastName.toUpperCase());
//     //console.log("Obj1's print method")
// }
}

Object.prototype.printNameUC = function() {
    console.log(this.firstName?.toUpperCase() + " " + this.lastName?.toUpperCase());
}

// Object.prototype.printName = function() {
//     console.log(this.firstName +" " + this.lastName)
// }

Object.prototype.company= "Arcadix";

//let arr = [1,2,3]

function Hero(name, level) {
    this.name = name;
    this.level = level;
}

let obj3 = new Hero("Hero", "Level");


// class Hero {
//     constructor(name, level) {
//         this.name = name;
//         this.level = level;
//     }
// }



let arr = [1,2,3,4,5];
arr.forEach((x,i)=>{
    x++;
})
//console.log(arr);

let arr1 = arr.map((x,i)=>{
    return ++x;
})
// console.log(arr);
// console.log(arr1);

let arr3 = arr.filter((x) => x%2 == 0);
//console.log(arr3);

//arr.map((x) => x%2 ==0 ? x : '' )

//arr = [{},{},{}]
arr = [1,2,5,4,3,5,1,4,2]; //[1,2,3,4,5]
let arr4 = arr.reduce((acc, x)=>{
    if(!acc.includes(x))
        acc.push(x);
    return acc; ///[1,2,5,4,3]
},[]);

arr = [1,2,5,4,3,5,1,4,2]; //[1,2,3,4,5]
let arr4 = arr.reduce((acc, x)=>{
    acc += x;
    return acc;
},0);

//console.log(arr4);



// let fn1 = ()=> {
//    console.log('fn 1');
// };

// let fn2 = async () => {
//     // return new Promise((resolve, reject) => {
//     //     setTimeout(() => {
//     //         resolve('fn 2');
//     //     },1000);
//     // })

//     return fetch(`https://jsonplaceholder.typicode.com/todos`)
//         // .then(response => response.json())
//         // .then(json => setTodo(json))
    
// };

// let fn3 = () => {
//     console.log('fn 3');
// }


// let fn2async = async () => {
//     fn1();
//     //await fn2().then(msg => console.log(msg));
//     let resp = await fn2();
//     let json = await resp.json();
//     console.log(json);
//     fn3();
// };

// //fn2async();
// //console.log(fn2async());

// function fnX (){    
//     var a =1, c=1;
//     function fnY(){
//         let b=100;
//         console.log(a + c);
//     }
//     a=10;
//     return fnY;
// }

// let fnZ = fnX();
// fnZ();



// async function asyncFn(){
//     return ('Async fn');
// }

// //asyncFn();
// let result = asyncFn();
// console.log(result);

//let result = asyncFn().then(x => console.log(x));


//CLOSURES


// function Counter(){
//     let count = 0;
//     let a =1;
   
//     return function Increment(){
//         console.log(a);
//         return count++;
//     }
// }
// // let val = Increment();
// // console.log(val);
// // let val2 = Increment();
// // console.log(val2);

// let fnIncrement = Counter();
// let val1 = fnIncrement();
// console.log(val1);
// let val2 = fnIncrement();
// console.log(val2);

// let fnIncrement1 = Counter();
// console.log(fnIncrement1());

