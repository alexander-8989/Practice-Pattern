let n = 5;
let string = "";

for(let i=1; i<=n; i++){
    for(let j=1; j<=2*n-1; j++){
        if(j>=i && j<=2*n-i){
            string += "*";
        }
        else{
            string += " ";
        }
    }
    string += "\n";
}
console.log(string);