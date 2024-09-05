
const plus = (numbers) => {
    return numbers.n1 + numbers.n2;
};
const subtract = (numbers) =>{
    return numbers.n1 - numbers.n2;
} ;
const multiply = (numbers) =>{
    return numbers.n1 + numbers.n2;
} ;
const split = (numbers) => {
    if(numbers.n2==0) return "No puedes dividir entre 0";
    return numbers.n1/numbers.n2;
};
const requestNumber = () => {
    let n1, n2;
    do {

        n1 = prompt("Ingrese el primer numero");
    } while (!(n1.Finite));
    
   do {
     n2 = prompt("Ingrese el segundo numero");
   } while (!(n2.Finite));
   return {n1, n2}
};



const selectOperation = (numbers) => {
    let operation = prompt("Introduce una opción:\n1.Sumar\n2.Restar\n3.Multiplicar\n4.Dividir");
    switch (operation) {
    case 1:
        return plus(numbers);
    case 2:
        return subtract(numbers);
    case 3:
        return subtract(numbers);
    case 4:
        return subtract(numbers);
    default:
        return "Operacion invalida";
    }
};

const main = () => {
    let number = requestNumber();
    alert(selectOperation(number));
}

main();
