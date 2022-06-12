const ireland = ['Dublin', 'Galway', 'Cork'];

const love = ireland.map(function(name) {
    return `I love ${name}!`;
});

const loveArrow = ireland.map((name) => {
    return `I love ${name}`
})

console.log(loveArrow)
// output: [ 'I love Dublin', 'I love Galway', 'I love Cork' ]


const loveArrowOneLine = ireland.map(name => `I love ${name}!`); 
console.log(loveArrowOneLine)
// output: [ 'I love Dublin!', 'I love Galway!', 'I love Cork!' ]

// arrow function com encadeamento de métodos 

const loveChain = ireland
    .filter(name => name === 'Dublin')
    .map(name => `I love ${name}!`)
console.log(loveChain)
    
//output: [ 'I love Dublin!' ]
// explain: 1º: filtrei com .filter(), apenas iria para o segundo método se o name fosse igual a 'Dublin'. 
// depois, com o map, escrevi a frase. 



        
