//2-Factorial de un Número: Escribe una función que calcule el factorial de un número utilizando un bucle.

function factorialNumero(numero){
    
    let factorial = 1;

    for(let i = 2; i <= numero; i ++){
        factorial = factorial * numero;
    }

    return factorial;
}

console.log(factorialNumero(10));