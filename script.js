

var Day = moment().format("dddd, MMMM Do"); 
console.log(Day); 
$("#currentDay").append(Day); 

var currTime = moment().format("hA"); 
console.log(currTime); 

// if (currTime.isBefore(".time-block")) {
//     $(".timeblock").attr("class", "future"); 

// }else if (currTime.isSame(".time-block")) {
//     $(".timeblock").attr("class", "present"); 

// }else (currTime.isAfter(".timeblock")) {
//     $(".timeblock").attr("class", "past"); 

// }; 
 