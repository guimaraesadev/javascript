// método .map() do objeto Array.
// permite percorrer um vetor o obter um novo array como resultado.

// podemos partir de um array de valores numéricos e obter um novo contendo o quadrado de cada item original.
// vetor = array

// exemplo 1:

const numeros = [1, 2, 3, 4, 5]; // vetor original

const numQuadrados = numeros.map(function (item) {
    return Math.pow(item, 2) // retorna o item original elevado ao quadrado
})

console.log(`${numeros} elevado ao quadrado é igual à ${numQuadrados}`)
//output: 1,2,3,4,5 elevado ao quadrado é igual à 1,4,9,16,25

// síntaxe oficial do .map()

// arrayOriginal.map(callback)
 
// a função callback é o meu 'parâmetro' do método .map() sempre.
// callback será executada para cada elemento no vetor original


// exemplo 2:
// uma função que retorne os países conforme o podium que eles estão oculpando 

const winners = [
    {
        name: "Super Team", // first 
        country: "Brazil"
    }, 
    {
        name: "Max Team", // second 
        country: "USA"
    },
    {
        name: "Big Group", // third
        country: "Canada"
    }
]

const showPodium = winners.map(function (item, indice) {
    return item.country; 
})

console.log(showPodium)
// output: [ 'Brazil', 'USA', 'Canada' ]





