// similsr to while loop, but ensures that even if the condition is false, the code will ecxecute at least once. 

// stntex : 
 
let i = 0; //initilization
do {
   console.log(i); //code to be executed
   i++; //updation
} while (i <= 5) //condition

//example
let a = 1;
do {
    console.log(a); // output => 1
    a++;
} while (a<1); //false 