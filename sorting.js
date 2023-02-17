let array = [50 , 12 ,3 ,5 ,95 , -10 , 11 , 7,-60]
let tempArray = []

// //************************Using Sort Method ****************************
// // array.sort((a,b)=>{
// //     return a - b ;
// // })
// // console.log(array,'array')



//************************Using Loop Method ****************************
for( let i=0 ; i < array.length ; i++){
    for( let j=0 ; j < array.length ; j++){
        console.log(array[i] , array[j])
        if(array[i] < array[j])    
        {console.log("jjjjj")
            temp = array[i] ;
            array[i] = array[j] ;
            array[j] = temp ;
        }
    }
}
console.log(array,'array')


// //************************Using Loop Method And Destructring ****************************
// for( let i=0 ; i < array.length ; i++){
//     for( let j=0 ; j < array.length ; j++){
//         console.log(array[i] , array[j])
//         if(array[i] < array[j])    
//         { 
//             [array[i] , array[j]] = [array[j] , array[i]]
//         }
//     }
// }
// console.log(array,'array')
