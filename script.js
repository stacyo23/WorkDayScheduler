$(document).ready(function() { 

// appends current date to header
var day = moment().format("dddd, MMMM Do"); 
$("#currentDay").append(day); 



//gives current time in hour+AM/PM format
var currTime = moment().format("hhA"); 
console.log(currTime); 

var startTime = moment().startOf("day").add(9, "hours");

//get first hour
var time1 =startTime.add(0, "h"); 
time1=time1.format("hA"); 
$(".block1").text(time1); 
//get 2nd hour - error on the line
var time2=startTime.add(1, "hour"); 
time2=time2.format("hA");
$(".block2").text(time2); 

var time3=startTime.add(1, "hour"); 
time3=time3.format("hA");
$(".block3").text(time3); 

var time4=startTime.add(1, "hour"); 
time4=time4.format("hA");
$(".block4").text(time4); 


var time5=startTime.add(1, "hour"); 
time5=time5.format("hA");
$(".block5").text(time5); 

var time6=startTime.add(1, "hour"); 
time6=time6.format("hA");
$(".block6").text(time6); 

var time7=startTime.add(1, "hour"); 
time7=time7.format("hA");
$(".block7").text(time7); 

var time8=startTime.add(1, "hour"); 
time8=time8.format("hA");
$(".block8").text(time8); 

var time9=startTime.add(1, "hour"); 
time9=time9.format("hA");
$(".block9").text(time9); 


});







 