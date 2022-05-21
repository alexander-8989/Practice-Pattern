let n =5;
let string = "";

for(let i=1; i<=n; i++){
    for(let j=1; j<=n; j++){
        if(j<=n+1-i){
            string += "*";
        }
        else{
            string += " ";
        }
    }
    string += "\n";
}
console.log(string);