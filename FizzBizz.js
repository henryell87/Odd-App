function fizzBizz(){
var  count = 0;
for(i = 0; i <=100; i++){
if (count % 3 === 0 && count % 5 === 0 ) {
   console.log("you get the Buzz");
   count++ 
}
else if(count % 3 === 0) {
    console.log("you get the fizz");
    count++ 

}
else if(count % 5  === 0) {
    console.log("you get the bizz");
    count++ 

}else{
    console.log(count);
    count++
    }
 }
    
}
fizzBizz();