let n = 5;
let string = "";

for(let i=1; i<=n; i++){
    for(let j=1; j<=n; j++){
        if(j>=i){
        string += String.fromCharCode((i - 1) + 65);;
        }
        else{
            string += " ";
        }
    }
    string += "\n";
}
console.log(string);