function eliminarDuplicados(array) {
    return array.filter((valor, indice, self) => {
        return self.indexOf(valor) === indice;
    });
}

const numeros = [1, 2, 2, 3, 3, 4, 5, 5];
const numerosSinDuplicados = eliminarDuplicados(numeros);
console.log(numerosSinDuplicados); 

