const { log } = require("console");

// Write your code here
let isWeekend = true;
let isHoliday = true;
let currentTime = 9;


// Conditional Statements

if (isWeekend===true|| isHoliday===true) {
    x = "The store is closed";
}

else if (isWeekend===false && isHoliday===false && currentTime>=9 && currentTime<=18){
    x = "The store is open for business.";
}
else {
    x = "The store is closed.";
}

console.log("Today : ", x);



   