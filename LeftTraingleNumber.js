let n = 10;
let string = "";

for(let i=1; i<=n; i++){
    p=n;
    for(let j=1; j<=i; j++){
        string += p-- + " ";
    }
        string += "\n";
}
console.log(string);