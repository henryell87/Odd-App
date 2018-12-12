function posNeg( number1, number2, isNegative) {

if (isNegative) {
    console.log(number1 < 0 && number2 < 0);
}
else {
console.log(number1 < 0 && number2 > 0) || (number1 > 0 && number2 < 0);
}
}
posNeg(2, 3, true);
posNeg(-3, 3, false);
posNeg(-4, -7, true);
posNeg(5, -3, false);