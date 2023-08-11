 checker =(num1, num2, num3)=>{
if(num1 > num2 && num1 > num3){
    return num1;
}else if(num2 > num1 && num2 >num3){
    return num2;
}else{
    return num3;
}
}
document.write(checker(44, 43, 45));

 function getDayName(dayNum){
    var day;

    switch(dayNum){
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            day = `Day ${dayNum} doesn't exist`;

    }
    return day;
}
document.write(getDayName(8));
