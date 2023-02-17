let array = [50 , 12 ,3 ,5 ,95 , -10 , 11 , 7,-60]
let tempArray = []
// using multi loop code

// for ( let i = 0 ; i < array.length ; i++){
//     let flag = true;
//     for (let j = i; j < array.length ; j++){
//         if(array [i] < array[j]){
//             flag = false
//         }
//     }
//     if(flag){
//         tempArray.push(array [i]) 
//     }
// }

//using single loop code
for ( let i = array.length-1 ; i >= 0 ; i--){
    if(array[i+1] == undefined){
        check  = array[i]
        tempArray.push(check)
    }
    if(array[i] > array[i+1] && array[i] > check){
        check  = array[i]
        tempArray.push(check)
    }  
}
console.log(tempArray ,'array')



const first = new Promise((resolve, reject) => {
    setTimeout(reject, 500, 'first');
  });
  const second = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'second');
  });
  
  Promise.any([first, second]).catch(error => {
    console.log(error); // AggregateError
  });