function substituirPares(pares) {
    if(!pares.length) return -1;
    for (let i = 0; i < pares.length; i++) {
        if (pares[i] === 0) {
            console.log("voce ja é zero!!");
        } else if (pares[i] % 2 === 0) {
            console.log(`substituindo ${pares[i]} por 0...`);
            pares[i] = 0;
        } 
    }

    return pares;
}



let impar = [1, 3, 4, 6, 80, 33, 23, 90];

console.log(substituirPares(impar));
