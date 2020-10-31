$(document).ready(function() { 

// appends current date to header
var day = moment().format("dddd, MMMM Do"); 
$("#currentDay").append(day); 



//gives current time in hour+AM/PM format
var currTime = moment().format("hhA"); 

var startTime = moment().startOf("day").add(9, "hours");

//get first hour
var time1 =startTime.add(0, "h"); 
time1=time1.format("h A "); 
$(".block1").text(time1); 
//get 2nd hour - error on the line
var time2=startTime.add(1, "hour"); 
time2=time2.format("h A");
$(".block2").text(time2); 

var time3=startTime.add(1, "hour"); 
time3=time3.format("h A");
$(".block3").text(time3); 

var time4=startTime.add(1, "hour"); 
time4=time4.format("h A");
$(".block4").text(time4); 


var time5=startTime.add(1, "hour"); 
time5=time5.format("h A");
$(".block5").text(time5); 

var time6=startTime.add(1, "hour"); 
time6=time6.format("h A");
$(".block6").text(time6); 

var time7=startTime.add(1, "hour"); 
time7=time7.format("h A");
$(".block7").text(time7); 

var time8=startTime.add(1, "hour"); 
time8=time8.format("h A");
$(".block8").text(time8); 

var time9=startTime.add(1, "hour"); 
time9=time9.format("h A");
$(".block9").text(time9); 


function compareTime() {

    
}

$(".saveBtn").on("click", function(event) {
    event.preventDefault();

    // This line grabs the input from the textbox
    var textInput = $(this).siblings(".form-control").val().trim();
    var hourofDay= $(this).parent().data("hour"); 
    
localStorage.setItem(hourofDay, textInput); 

});
});







 