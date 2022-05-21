let n = 9;
let string = "";
let k=0;

for(let i=1; i<=n; i++){
     i<= (n+1)/2 ? k++ : k--;
    for(let j=1; j<=(n+1)/2; j++){
        if(j<=k){
            string += "*";
        }
        else{
            string += " ";
        }
    }
    string += "\n";
}
console.log(string);