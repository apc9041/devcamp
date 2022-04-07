function draw(n) {
    text = '';
    for (let i=n; i>=1; i-- ) {
        for (let j=0; j<n; j++) {
            text += i;
        }
        text += '\n';
    }
    console.log(text);
}
draw(2)
draw(3)
draw(4)

//for (let i=9; i>=0; i--) {
//    console.log(i)