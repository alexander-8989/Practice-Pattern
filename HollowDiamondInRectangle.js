let n = 9;
let print = "";
let k = 0;

for(let i=1; i<=n; i++){
    i<=(n+1)/2 ? k++ : k--;
    for(let j=1; j<=n; j++){
        if(j<=6-k || j>=4+k){
            print += " *";
        }
        else{
            print += "  ";
        }
    }
    print += "\n";
}
console.log(print);