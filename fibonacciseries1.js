let n = 12;
let n1 = 0;
let n2 = 1;
let nextTerm;

for(let i=1; i<=n; i++){
    nextTerm = n1+n2;
    n1 = n2;
    n2 = nextTerm; 
    console.log(n1);
}
