function calcularPromedio(array) {
    if (array.length === 0) {
        return 0;
    }
    const suma = array.reduce((acumulador, numero) => acumulador + numero, 0);
    return suma / array.length;
}

const numeros = [1, 2, 3, 4, 5];
const promedio = calcularPromedio(numeros);
console.log(`El promedio es: ${promedio}`);
