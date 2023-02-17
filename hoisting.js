// variable hoisting 
check = true;
console.log(check) //return true
var check;

// check1 = true;
// console.log(check1) //return error Cannot access 'check1' before initialization
// let check1;

// function hoisting
sum() // Outputs " 50 " even when the function is declared after calling
function sum(){
    console.log(20+30);
}

// Hoisting takes place in the local scope as well
doSomething()
function doSomething(){
    x = 33;
    console.log(x);
    var x;
  }


 //  Variable initializations are not hoisted, only variable declarations are hoisted:
var x;
console.log(x); // Outputs "undefined" since the initialization of "x" is not hoisted
x = 23;