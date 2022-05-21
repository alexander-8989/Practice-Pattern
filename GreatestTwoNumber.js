function greatestNumber(x,y) {
    let num1 = 10;
    let num2 = 10;
    if (num1 == num2){
        console.log("Both are equal");
    }
    else if (num1 > num2){
        console.log(num1 + " is greater");
    }
    else{
        console.log(num2 + " is greater");
    }
}
console.log(greatestNumber());
