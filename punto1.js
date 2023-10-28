function sumaNumerosPares(array) {
    let suma = 0;
    for (let num of array) {
        if (num % 2 === 0) {
            suma += num;
        }
    }
    return suma;
}
