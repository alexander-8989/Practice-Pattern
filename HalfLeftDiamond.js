let n = 9;
let print = "";
let k = 0;

for(let i=1; i<=n; i++){
    i <= (n+1)/2 ? k++ : k--;
    for(let j=1; j<=(n+1)/2; j++){
        if(j > (n+1)/2-k){
            print += " *";
        }
        else{
            print += "  ";
        }
    }
    print += "\n";
}
console.log(print);