//Crie um array de números que contenha 8 números.
const arrayDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8]

//Depois disso, utilize este array para criar duas funcões de array `map()`:
//1. A primeira deve retornar um novo array contendo os números múltiplicados por 3, Crie uma `const triplos`, e guarde o valor do array nesta const;
const arrayTriplos = arrayDeNumeros.map(numero => numero * 3)
//2. A segunda deve retornar um novo array contendo os números divididos por 2. Crie uma `const metades`, e guarde o valor do array nesta const;
const arrayDividir = arrayDeNumeros.map(numero => numero / 2)

console.log(arrayDividir, arrayTriplos)