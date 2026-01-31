for (let i = 0; i <= 10; i++) {
    console.log(`outer loop value: ${i}`); //outer loop runs 0-10 times 
    for (let j = 0; j <= 10; j++) {
        console.log(`inner loop value ${j} and inner loop ${i}`); // for outer o=(it will print 10 itmes) for 1=(it will print 10 itmes) .... for 10=(it will print 10 itmes)
    }   
}