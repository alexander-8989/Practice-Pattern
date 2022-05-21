let n = 5;
let string = "";

for(let i=1; i<=n; i++){
    for(let j=1; j<=2*n-1; j++){
        if((i==n || (i+j)==n+1 && j<=(2*n)-1)/2 || j==n+i-1){
            string += " *";
        }
        else{
            string += "  ";
        }
    }
    string += "\n";
}
console.log(string);