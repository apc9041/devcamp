debugger
function draw(n) {
    text = '';
    for (let i=n; i>0; i-- ) {
        for (let j = 0; j < n; j++) {
            if (i>(j+1)) {
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