var isFull = false;
//All animal methods
function sleep(Time){
    isAwake = false;
    var howLongToSleep =  Time;
    for(i = 0; i < howLongToSleep; i++){ 
        console.log("I'm sleeping Dont wake me !!")
    }
    isAwake = true;
    console.log(" your time to sleep " +  howLongToSleep  + " hours ");
    console.log(isAwake)
}
function Eat(amount){
    let amountToEat = amount;
    if (amountToEat > 0) {
        isFull = true;
    }
console.log("You ate " + amountToEat + " lbs of food " + "Are you full ? " + isFull);

}
function jump(howHigh, howLong){
    console.log("You're jumping " + howHigh + " ft high " + howLong  + " mins ");
}
// o = omni C = Carni H = Herb
function hunt(Food){
    var type = Food.toLowercase;
    switch(type){
     case "O":
        console.log("Damn son you're eating both")

     break
     case "C":
        console.log("Damn son you're eating both")

     break
     case "H":
      sleep(5);

     break
     default:
          console.log("Hunting season is over")


    }
    
}

function run(Speed, Distance){

    console.log(" I am going " +  Speed  + " miles per hour for " +  Distance + " mi ");
}

function mate(Mated){ 
    didMate = false;
let timesMated = Mated;
if (timesMated > 0 ){
    didMate = true;

console.log("You have mated " + timesMated + " times congradulation " + " if you succeded " + didMate);
}else{

console.log("You have not mated, " +" Your mate count is  "  + timesMated + "  you have blue balls " + "did ya get some ? "+ didMate);

}




}

// Calling al methods
sleep(5);
Eat(70);
jump(9,3);
hunt("O");
run(5,20);
mate(2);