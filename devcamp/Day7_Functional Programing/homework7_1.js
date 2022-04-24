function c() {
    //debugger
    //html inner
    let text = document.getElementById("text").innerHTML;

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    //filter arr
    let result = arr.filter(num => {
        return num % 2 === 0
    });
    console.log(result);
    //map arr
    result = result.map(num => num * 1000)
    console.log(result);
    
    //print result on Text.HTML
    document.getElementById("text").innerText = result;

}