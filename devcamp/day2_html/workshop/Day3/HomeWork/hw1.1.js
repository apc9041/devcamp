function draw(n) {
    text = '';
    for (let i=0; i<1; i++ ) {
        for (let j=0; j<n; j++) {
            text += '*';
        }
        text += '\n';
    }
    console.log(text);
}
draw(1)
draw(2)
draw(3)