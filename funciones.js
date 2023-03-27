// cambio prueba git

// Funcion expresada
let sumar1 = function(numeroA, numeroB){
    return numeroA + numeroB;
}
console.log(sumar1(7,9));


// Funcion Declarada
function elDoble (unNumero) {
    return unNumero * 2;
}
console.log(elDoble(6));

// Ejemplo Scope
let mensaje = "Hola";

function saludar(){
    let mensaje = "Chau"
    return mensaje;
}

console.log(saludar()); // me devuelve 'Chau'
console.log(mensaje); // me devuelve 'Hola'

// Arrow functions

let laMitad = numero => numero / 2;
console.log(laMitad(8));

let dividir1 = (numeroA, numeroB) => numeroA / numeroB;
console.log(dividir1(20,4));

let tengoQueTrabajar = dia => {
    if(dia == "Sábado" || dia == "Domingo"){
        return "No tenes que ir a trabajar"
    }else{
        return "Si Augusto, tenes que ir a trabajar";
    }
}

console.log(tengoQueTrabajar("Lunes"));

// Callbacks
let  sumar = (numero1, numero2) => numero1 + numero2;
let  restar = (numero1, numero2) => numero1 - numero2;
let  multiplicacion = (numero1, numero2) => numero1 * numero2;
let  division = (numero1, numero2) => numero1 / numero2;

let calculadora = (numero1 ,numero2, operacion) => operacion(numero1, numero2);

console.log(calculadora(18, 3, restar));



