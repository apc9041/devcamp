function onKeyUp(event) {
    const price = document.getElementById('price');
    const priceWithOutComma = price.value.replaceAll(',','').split('').reverse();
    let newPrice = '';

    for (let i=0; i<priceWithOutComma.length; i++){
        newPrice += priceWithOutComma[i];
        if ( ( i + 1 ) % 3 == 0 && i != priceWithOutComma.length - 1 )
            newPrice += ',';
    }
    price.value = newPrice.split('').reverse().join('');

}


price.addEventListener('keyup', onKeyUp);


