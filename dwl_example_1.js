let score = 1;
do {
    console.log(`score is: ${score}`);
    score++;
} while (score <= 10);

let score1 = 11;
do {
    console.log(`score is: ${score1}`); //print 11
    score1++; //then 11 => 12
} while (score1 <= 10); // 12 < 10 false loop will end