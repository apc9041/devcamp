debugger
function draw(n) {
    text = '';
    let a=1;
    for (let i=1; i<=n; i++ ) {
        for (let j=1; j<=n; j++) {
            text += a;
            a += i;
        }
        text += '\n';
        a = i+1
    }
    console.log(text);
}
draw(2)
draw(3)
draw(4)