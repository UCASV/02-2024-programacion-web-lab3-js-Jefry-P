//funcion que calcula el factorial de un numero de mayor valor a menor valor
const calculateFactorial = (n) => {
    let resultado = 1;
    //iteramos en reversa
    for (let i = n; i > 1; i--) {
      resultado = resultado * i;
    }
    //mostarmos el resultado en un alert
    alert(`El factorial de ${n} es: ${resultado}`);
}

const requestNumber = () => {
    let n;
    do {
      n = prompt("Introduce un número entero no negativo para calcular su factorial:");
    } while (!(isFinite(n) && n>0));//validamos que valor ingresado sea numero
    return n;
}

const main = () => {
    //ejecucion de funciones
    calculateFactorial(requestNumber());
}

main();
