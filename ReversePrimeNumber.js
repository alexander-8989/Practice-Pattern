let n1 = 200;
let n2 = 1;

for(let i=n1; i>=n2; i--){
    let val = 0;

    for(let j=i-1; j>=2; j--){
        if(i%j == 0){
            val = 1;
            break;
        }
    }

    if(val == 0){
        console.log(i);
    }
}
