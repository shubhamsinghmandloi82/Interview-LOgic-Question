// //----------------------------------------------------------------------------------
// //                              hoisting example 
// console.log('')
// // this is variable hoisting
// data = " 123254653456"
// //console.log("hello word hoisting run in js file" , data)
// var data ;

// // this is function hoisting
// sum();

// function sum(){
//  let num1 = 45 ;
//  let num2 = 55 ;
//  let num3 = ( num1 + num2 )
//  //console.log( num3 )
// }

// //---------------------------immediately invoked function -------------------------
// (function () {
//    // console.log('hello guys this is immediately invoked function')
// })()


// //---------------------------------high order function -------------------------
// // high order function as a argument
// function highOrderFunction(fn){
//     fn();
// }
// highOrderFunction(function() { console.log("high order function run successfully") })

// // high order function as a return function
// function higherOrderFunction2() {
//     return function() {
//       return console.log('high order function return a function');
//     }
//   }      
//   var x = higherOrderFunction2();
//   x()


// // --------------------------closure function example-----------------------------

// function closure(){
//     let name = 'shubham';
//      return function getname(){
//         console.log('hey....'+name)
//      }
// }
// let callFunc = closure();
// callFunc()


// //-------------------- arrow function this keyword maion diff --------------------

// var obj1 = {
//     v1 : 'shubham' ,
//     valueOfThis: function(){   
//       return this.v1;
//     }
//   }
//   var obj2 = {
//     v1 : 'shubham' ,
//     valueOfThis: ()=>{
//       return this.v1;
//     }
//   }
//   console.log( obj1.valueOfThis()); // Will return the object obj1
//   console.log( obj2.valueOfThis()); // Will return window/global object

//   //-----------------------------spread oprator----------------------------------

//   //for array 
//   let array1 = [3, 4, 5, 6];
//   let clonedArray1 = [...array1];
//   array1.push(8)
//   console.log(array1); 
//   console.log(clonedArray1); 

//   //for object
//   let ob1 = {x:'Hello', y:'Bye'};
//   let clonedObj1 = {...ob1};
//   console.log(ob1);

//   let ob2 = {z:'Yes', a:'No'};
//   let mergedObj = {...ob1, ...ob2}; 
//   console.log(mergedObj);



//   let checkPromise =  new Promise((resolve,reject)=>{
//     let data = 1 ;
//     if(data){
//         resolve('promise resolved successfully')
//     }else{
//         reject('promise rejected successfully')
//     }
//   })
//  checkPromise.then(data=>{
//     console.log(data)
//  }).catch(err=>{
//     console.log(err)
//  })

// console.log(50 - '10' + 1 + '10')


// let c = (function(){
//   var x = 10;
//   var y = x;
//   console.log(x, y)
//   x = 20;
//   console.log(x, y)
//   return (x+y)
// })();

// console.log(c,'c');


// function addition(a){
//   return function(b){
//     // console.log(12+18)
//     return a+b;
//   }
// }
// let x = addition(5)(6)
// console.log(x,'x');

// function outer(){
//   let a=1;
//   return ()=>console.log(a++);
// }
// let call = outer();
// call();
// call();
// outer()();

// let array = [1,5,0,undefined,6,8,null,9];

// let filter = array.filter(Boolean);
// console.log(filter);

// let array1 = [3, 4, 5, 6];
// let clonedArray1 = [...array1];
// // Spreads the array into 3,4,5,6
// console.log(clonedArray1); // Outputs [3,4,5,6]



// let string ='chdvchbdsvhbgdsbg';

// console.log(string.startsWith('c'))

// const  calculateSalary = (job) =>{
//     var income = 5;
//     if(job){
//         var income = 50;
//     }
//     {
//         var income = 500;
//         {
//             var income = 5000;
//         }
//     }
//     return income;
// }

// console.log(calculateSalary(true));

let array = [1,2,3,4,5,6,7,8,9,10]
let check = array.reduce((a,b)=>{
     console.log(a,b)
     return a+b;
 })
console.log(array,'===',check)



