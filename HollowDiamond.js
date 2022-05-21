let n = 15;

let text = "";

for (i = 1; i <= 2 * n - 1; i++) {
    for (j = 1; j <= 2 * n - 1; j++) {
        if (j == (n + i) - 1 || j==(n-i)+1 || j==(i-n)+1 || j==(2*n)-i + (n-1) || i==n && j==n) {
            text += " *";
        }
        else {
            text += "  ";
        }
    }
    text += "\n";
}
console.log(text);