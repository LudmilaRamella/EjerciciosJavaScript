//1-Suma de Números Pares: Crea un programa que sume todos los números pares en un array.

function sumaNumerosPares(array) {
    let suma = 0;
    for (let num of array) {
        if (num % 2 === 0) {
            suma += num;
        }
    }
    return suma;
}

console.log(sumaNumerosPares([1,2,3,4,5,6,7,8,9,10]));
