function strSandwich(string1, string2){
var end = string1.length;
var half = string1.length / 2;
var slice1 = string1.substring(0, half);
var slice2 = string1.substring(half, end);
var sandwhich = slice1 + string2 + slice2;
return sandwhich;
}
if (string1.length >= string2.length) {
var slice1 = string1.substring(0, half);
var slice2 = string1.substring(half, end);
var sandwhich = slice1 + string2 + slice2; 
return sandwhich;
}


strSandwich("helllo", "MOTO");
