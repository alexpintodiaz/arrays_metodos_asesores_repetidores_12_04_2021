
let array1 = [1, 2, 3, 4];

console.log(array1.unshift(prompt("Ingrese un dato 1")));
console.log(array1.unshift(prompt("Ingrese un dato 2")));
console.log(array1.unshift(prompt("Ingrese un dato 3")));
console.log(array1.unshift(prompt("Ingrese un dato 4")));
console.log(array1.unshift(prompt("Ingrese un dato 5")));
console.log(array1.unshift(prompt("Ingrese un dato 6")));

console.log(array1);

let eliminado = array1.shift();

console.log(("El elemento eliminado es " + eliminado))
