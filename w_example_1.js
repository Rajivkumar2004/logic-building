let count = 1;
while (count <=10) {
    console.log(`count is : `+count); // 1  2 3 4 5  6 7 8 9 10 
    count++; // 1 2 3 4 5 6 7 8 9 10 (11)=> false
}

let myArray = ["flash","batman","superman"]
let arr = 0;
while (arr < myArray.length) {
    console.log(`value is : ${myArray[arr]}`);
    arr++;
}