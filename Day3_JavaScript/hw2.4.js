debugger
function draw(n) {
    let text = "";

    for (let i = 1; i < n + 1; i++) {
        for (let j = 0; j < n; j++) {
            if (j < i) {
                text += i;
            } else {
                text += "-";
            }

        }
        text += "\n";
    }


    for (let i = n-1 ; i >= 1 ; i--) { // n = 3
        for (let j = 0; j < n; j++) {
            if (j < i) {
                text += i;
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