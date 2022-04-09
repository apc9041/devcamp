debugger
function draw(n) {
    let text = "";
    let a=1;
    for (let i = 1; i < n + 1; i++) {
        for (let j = n; j > 0; j--) {
            if (j <= i) {
                text += a;
                a += 1;
               
            } else {
                text += "-";
            }

        }
        text += "\n";
    }





    for (let i = n-1 ; i >= 1 ; i--) { 
        for (let j = n ; j > 0; j--) {
            if (j <= i) {
                text += a;
                a += 1;
            } else {
                text += "-";
            }
        }
        text += "\n";
    }


    console.log(text);
}

draw(2);
draw(3);
draw(4);