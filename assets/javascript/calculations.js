//function to calculate daily pay by inputting hours worked and
// multiply them by different daily rates

let monday = document.getElementById("monday-hours");
let tuesday = document.getElementById("tuesday-hours");
let wednesday = document.getElementById("wednesday-hours");
let thursday = document.getElementById("thursday-hours");
let friday = document.getElementById("friday-hours");
let saturday = document.getElementById("saturday-hours");
let sunday = document.getElementById("sunday-hours");

function mondayPay() {
    let result = monday.value * weekday_pay;
    return document.getElementById("mon-pay").innerHTML = result.toFixed(2);
}

function tuesdayPay() {
    let result = tuesday.value * weekday_pay;
    return document.getElementById("tue-pay").innerHTML = result.toFixed(2);
}

function wednesdayPay() {
    let result = wednesday.value * weekday_pay;
    return document.getElementById("wed-pay").innerHTML = result.toFixed(2);
}

function thursdayPay() {
    let result = thursday.value * weekday_pay;
    return document.getElementById("thur-pay").innerHTML = result.toFixed(2);
}

function fridayPay() {
    let result = friday.value * weekday_pay;
    return document.getElementById("fri-pay").innerHTML = result.toFixed(2);
}

function saturdayPay() {
    let result = saturday.value * saturday_pay;
    return document.getElementById("sat-pay").innerHTML = result.toFixed(2);
}

function sundayPay() {
    let result = sunday.value * sunday_pay;
    return document.getElementById("sun-pay").innerHTML = result.toFixed(2);
}

// function to calculate total wage
let monday_pay = document.getElementById("mon-pay");
let tuesday_pay = document.getElementById("tue-pay");
let wednesday_pay = document.getElementById("wed-pay");
let thursday_pay = document.getElementById("thur-pay");
let friday_pay = document.getElementById("fri-pay");
let weekend1_pay = document.getElementById("sat-pay");
let weekend2_pay = document.getElementById("sun-pay");

// function to calculate total pay
function totalPay() {
    let result = parseFloat(monday_pay.innerHTML) + parseFloat(tuesday_pay.innerHTML) + 
    parseFloat(wednesday_pay.innerHTML) + parseFloat(thursday_pay.innerHTML) + 
    parseFloat(friday_pay.innerHTML) + parseFloat(weekend1_pay.innerHTML) + 
    parseFloat(weekend2_pay.innerHTML);
    return document.getElementById("twp").innerText = result;
}

 //function to calculate tax due per week
 function taxDue() {
        console.log("Is this thing on?")
        let amt = document.getElementById("twp").innerHTML;
        let tax = amt * 0.15;
        return document.getElementById("week-tax").innerHTML = tax.toFixed(2) ;

 }

// function to look at hours worked during the week ??????
function HoursWorked() {
    let result = parseFloat(monday.value) + parseFloat(tuesday.value) + parseFloat(wednesday.value) 
    + parseFloat(thursday.value) + parseFloat(friday.value) + parseFloat(saturday.value) 
    + parseFloat(sunday.value);
    return document.getElementById("t-h-w").innerHTML = result;
}


// function to calculate total commission earned
let totalCommission = document.getElementById("number");

function totalCommissionEarned() {
    let result = totalCommission.value;
    return document.getElementById("t-c-e").innerText = result;
}

// function to calculate the amount of commission earned per hour
let totalHours = document.getElementById("t-h-w");


// function to calculate commission earned per hour
function cphCalculate() {
    let result = parseFloat(totalCommission.value) / parseFloat(totalHours.innerText);
    return document.getElementById("commissionPerHour").innerText = result.toFixed(0);
}

// formula to calculate commission per hour using different bands and pay scales

let cphtest = document.getElementById("commissionPerHour")

switch (cphtest){

    case 0 :
        
    default:
        text = "No bonus";
}




