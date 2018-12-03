/* for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}This is a bad piece of code */
function odd(){ 

  // if a number is divisable by 2 it's even
  // If a number is not divisable by 2 it's odd
  // Always use prcise equals"==="
  var currentNumber = Number(prompt("Enter a number"));
  

  if(currentNumber % 2 === 0){
  var msg = "The Number:" + currentNumber +   "Is Even  ";
  document.getElementById("Num").innerHTML = msg;
  }
    else{
      var msg2 = "The Number:" + currentNumber + "Is Odd  ";
      document.getElementById("Result").innerHTML = msg2;
    }

  }

  // Start 
  
  //odd(50);
  //odd(400);
  //odd(60);
  //odd(30);
  //odd(53);