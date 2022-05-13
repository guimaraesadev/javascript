// como um último teste, vamos ver o que acontece se um dos parâmetros for um array com dois elementos, um número e um array

const arrayOriginal = [50, 60, 70]
const arrayConcat = arrayOriginal.concat([80, [90, 100]])

console.log(arrayConcat)
console.log(arrayOriginal)

// return

// [ 50, 60, 70, 80, [ 90, 100 ] ]
// [ 50, 60, 70 ]
