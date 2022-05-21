let num1 = 1;
let num2 = 100;

console.log(`The prime numbers between ${num1} and ${num2} are:`);

for (let i = num1; i <= num2; i++) {
    let val = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            val = 1;
        }
    }
    if (i > 1 && val == 0) {
        console.log(i);
    }
}