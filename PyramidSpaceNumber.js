let n = 3;
let string = "";
let p=1;

for(let i=1; i<=n; i++){
    let k=1;
    for(let j=1; j<=2*n-1; j++){
        if(j>=n+1-i && j<=n-1+i && k){
            string += p;
            p++;
            k=0;
        }
        else{
            string += " ";
            k=1;
        }
    }
    string += "\n";
}
console.log(string);