debugger
function draw(n) {
    text = '';
    let a=1;
    for (let i=0; i<n; i++ ) {
        for (let j=0; j<n; j++) {
            text += a;
            a += 1;
        }
        text += '\n';
    }
    console.log(text);
}
draw(2)
draw(3)
draw(4)
