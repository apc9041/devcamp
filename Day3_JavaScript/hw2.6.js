debugger
function draw(n) {
    text = '';
    for (let i=n; i>0; i-- ) {
        for (let j = n; j > 0; j--) {
            if (i<j) {
                text += '-';
            } else {
                text += '*';
            }
        }
        text += '\n';
    }
    console.log(text);
}
draw(2)
draw(3)
draw(4)