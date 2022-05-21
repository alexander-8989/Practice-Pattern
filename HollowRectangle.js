let p = "ALEXANDER";
let l = p.length;
let string = "";

for(let i=0; i<l; i++){
    for(let j=0; j<l; j++){
        if(i==0){
            string += p[l-j-1];
        }
        else if(j==0){
            string += p[l-i-1];
        }
        else if(i==l-1){
            string += p[j];
        }
        else if(j==l-1){
            string += p[i];
        }
        else{
            string += " ";
        }
    }
    string += "\n";
}
console.log(string);

