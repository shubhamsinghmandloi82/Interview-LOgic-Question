// let string = 'shubham mandloi'
// var array = string.split('');
// for( let i = 0 ; i < array.length ; i++){
//     let count = 1;
//     for( let j = i+1 ; j < array.length ; j++){
//         if(array[i] == array[j]){
//           count ++ ;
//         }
//     }
//     console.log(array[i] ,'=>',count ,'count');  
// }

var string = "Welcome to this Javascript Guide!";
// reverse string using methods
let newString = string.split("").reverse().join("")

//reverse string using for loop
let newString2 = '';
for(i = string.length - 1  ; i >= 0 ; i--){
  newString2 += string[i]
}
console.log(newString2)

let check = new Promise((resolve,reject)=>{
  let test = true ;
  let c 
  if(test){
    c= (50 * 2)
    resolve(c,'promise run SuccessFully')
  }else{
    reject('promise Rejected')
  }
})
console.log(check,'check')
check.then(data =>{
  console.log(data,'data')
})
.catch(console.log('data not found'))