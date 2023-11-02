//filtrar Números Primos: Crea una función que reciba un array de números y devuelva un nuevo array que contenga solo los números primos.
function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

function filtrarNumerosPrimos(array) {
    return array.filter(numero => esPrimo(numero));
}

const numeros = [2, 3, 4, 5, 6, 7, 8, 9];
const numerosPrimos = filtrarNumerosPrimos(numeros);
console.log(numerosPrimos);