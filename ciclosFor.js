for (let vuelta = 0 ;vuelta <=76; vuelta++){
    console.log("Estas en la vuelta numero: " + vuelta);
}


function imprimirAzul() {
    for (let i = 1; i<=4; i++){
        console.log("Azul")
    }
}
console.log(imprimirAzul())

function pasandoPorI(){
    for (let i = 0; i<=4 ; i++){
        console.log("acá i tiene el valor de: ")
    }
}

function noParesDeContarImparesHasta(numero) {
    let conteo = 0;
    for (let i = 0; i<=numero; i++){
        if((i%2) !== 0){
            conteo = conteo + 1;
        }
    }
    return conteo;
}

console.log(noParesDeContarImparesHasta(180))
