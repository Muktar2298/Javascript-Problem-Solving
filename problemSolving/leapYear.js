function checkLeapYear(year) {
    if(year % 400 == 0){
        console.log(year + " " + "Leap Year!");
    }
    else if(year % 4 == 0 && year % 100 != 0){
        console.log(year + " " + "Leap Year!");
    }
    else{
        console.log(year + " " + "Not a Leap year!");
    }
}
checkLeapYear(1800);