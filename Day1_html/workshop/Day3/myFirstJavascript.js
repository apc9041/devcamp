function printRow(numPerLine) {
    text = '';
    for (let j=0; j<numPerLine; j++) {
        text += '-';
    }
    return text;
}
function draw(row, col) {
    text = '';
    for (let i=0; i<row; i++) {
        text += printRow(col);
        text += '\n';
    }
    console.log(text);
}
draw(5,3);