var alerts = document.getElementById("hideMe");

function hide(){
    alerts.remove();
}

function loading(){
    alert("Weather report loading...");
}

var highTemp1 = 24;
var lowTemp1 = 18;
var highTemp2 = 27;
var lowTemp2 = 19;
var highTemp3 = 21;
var lowTemp3 = 16;
var highTemp4 = 26;
var lowTemp4 = 21;
var temp1 = document.getElementById("temp1");
var temp2 = document.getElementById("temp2");
var temp3 = document.getElementById("temp3");
var temp4 = document.getElementById("temp4");
var temp5 = document.getElementById("temp5");
var temp6 = document.getElementById("temp6");
var temp7 = document.getElementById("temp7");
var temp8 = document.getElementById("temp8");
function changeTemp(){
    console.log("Change the temp")
    temp1.innerHTML = Math.round(highTemp1 * 9/5 + 32);
    temp2.innerHTML = Math.round(lowTemp1 * 9/5 + 32);
    temp3.innerHTML = Math.round(highTemp2 * 9/5 + 32);
    temp4.innerHTML = Math.round(lowTemp2 * 9/5 + 32);
    temp5.innerHTML = Math.round(highTemp3 * 9/5 + 32);
    temp6.innerHTML = Math.round(lowTemp3* 9/5 + 32);
    temp7.innerHTML = Math.round(highTemp4 * 9/5 + 32);
    temp8.innerHTML = Math.round(lowTemp4 * 9/5 + 32);
}