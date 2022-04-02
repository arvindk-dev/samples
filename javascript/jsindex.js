var a =10;
function fn(){
    var b =1;
    // console.log(b);
    // console.log(this);
}
fn();
var aFn = () => {
    //console.log(this);
}

aFn();

class c1 {
    constructor(){
        this.x = 1
    };
    fn1(){
        setTimeout(function(){
            console.log(this)
        }, 10)
    }
    fn2(){
        setTimeout(()=>{
            console.log(this)
        },10)
    }
}

var obj = new c1();
// obj.fn1();
// obj.fn2();

var obj1 = {
    a: () =>{
        console.log(this);
    }
}

//obj1.a();
