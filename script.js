$(document).ready(function() { 

var Day = moment().format("dddd, MMMM Do"); 
console.log(Day); 
$("#currentDay").append(Day); 

var time1 = beforeTime.add(0, "h");


var currTime = moment().format("hA"); 
console.log(currTime); 

var startTime = moment().startOf("date")._d; 
console.log(startTime); 

newstartTime = moment(startTime).add("9", "hours"); 

console.log(newstartTime._d); 


// if (currTime.isBefore(".time-block")) {
//     $(".timeblock").attr("class", "future"); 

// }else if (currTime.isSame(".time-block")) {
//     $(".timeblock").attr("class", "present"); 

// }else (currTime.isAfter(".timeblock")) {
//     $(".timeblock").attr("class", "past"); 

// }; 


});


 