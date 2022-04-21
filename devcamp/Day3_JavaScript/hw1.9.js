debugger
function draw(n) {
    text = '';
    let a=2;
    for (let i=0; i<n; i++ ) {
        for (let j=0; j<1; j++) {
            text += a;
            a += 2;
        }
        text += '\n';
    }
    console.log(text);
}
draw(2)
draw(3)
draw(4)