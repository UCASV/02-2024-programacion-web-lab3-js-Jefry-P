//metodos para operaciones matematicas
const plus = (numbers) => {
  return parseInt(numbers.n1) + parseInt(numbers.n2);
};
const subtract = (numbers) => {
  return numbers.n1 - numbers.n2;
};
const multiply = (numbers) => {
  return numbers.n1 * numbers.n2;
};
const split = (numbers) => {
//validamos division entre 0
  if (numbers.n2 == 0) return "No puedes dividir entre 0";
  return numbers.n1 / numbers.n2;
};

//funcion para solicitar numeros
const requestNumber = () => {
  let n1, n2;
  do {
    n1 = prompt("Ingrese el primer numero");
  } while (!isFinite(n1));//valida que sea un numero tanto entero como decimal

  do {
    n2 = prompt("Ingrese el segundo numero");
  } while (!isFinite(n2));
  return { n1, n2 };
};

//funcion para mostrar menu y seleccionar operacion
const selectOperation = (numbers) => {
  let operation;
  let validOperation = false;
  do {
    operation = prompt(
      "Introduce una opción:\n1.Sumar\n2.Restar\n3.Multiplicar\n4.Dividir"
    );

    //ejecutamos respectiva funcion a cada opcion
    switch (parseInt(operation)) {
      case 1:
        return plus(numbers);
      case 2:
        return subtract(numbers);
      case 3:
        return multiply(numbers);
      case 4:
        return split(numbers);
      default:
        alert("Operación inválida. Inténtalo de nuevo.");
        validOperation = false; // Mantener el ciclo
        break;
    }
  } while (!validOperation);//solo va a seguir pidiendo opcion en caso de no ingresar valor valido
};

const main = () => {
   //mostramos alerta con resultado de toda la ejecución 
  alert(selectOperation(requestNumber()));
};

main();
