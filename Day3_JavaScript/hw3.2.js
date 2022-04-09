debugger
function draw(n) {
    text = '';
    let a = 1;
    for (let i = n; i > 0; i--) {
        for (let j = (n + (n - 1)); j >0 ; j--) {
            if ( n*2<i+j || i>j ) {
                text += '-';
            } else {
                text += a;
                a +=1 ;
            }
        }
        text += '\n';
    }
    for (let i = 1; i < n; i++) {
        for (let j = (n + (n - 1)); j >0 ; j--) {
            if ( n*2<=i+j || i>=j ) {
                text += '-';
            } else {
                text += a;
                a += 1;
            }
        }
        text += '\n';
    }
    console.log(text);
}


draw(2);
draw(3);
draw(4);