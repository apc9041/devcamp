debugger
function draw(n) {
    text = '';
    for (let i = n; i > 0; i--) {
        for (let j = (n + (n - 1)); j >0 ; j--) {
            if ( n*2<i+j || i>j ) {
                text += '-';
            } else {
                text += '*';
            }
        }
        text += '\n';
    }
    for (let i = 1; i < n; i++) {
        for (let j = (n + (n - 1)); j >0 ; j--) {
            if ( n*2<=i+j || i>=j ) {
                text += '-';
            } else {
                text += '*';
            }
        }
        text += '\n';
    }
    console.log(text);
}


draw(2);
draw(3);
draw(4);