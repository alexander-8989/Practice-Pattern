function oddEven(n) {
    if (n % 2 == 0) {
        return "It is Even number";
    }
    else {
        return "It is odd number"
    }
}
let n = 3;
let value = oddEven(n);
console.log(value);