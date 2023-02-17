// let arr = [1, 2, 4, 23, 5, 6, 7, 5];
// function sum(arr) {
//     if(arr.length == 1) {
//         return arr[0] 
//     } else{
//         return arr.shift() + sum(arr)
//     }
// }
// console.log(sum(arr));


var schedule = require('node-schedule');
var date = new Date(2022, 11, 28, 18, 1, 0);

var j = schedule.scheduleJob(date, function(){
 console.log('The world is going to end today.');
});