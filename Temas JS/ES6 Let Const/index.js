function imprimeIdade() {
    for (const idade = 20; idade <= 100; idade++) {
        console.log('Idade da Sabrina', idade )
    }
    console.log('Idade da Sabrina', idade)
}

//imprimiu normalmente.

imprimeIdade()

// tentar chamar a variável FORA da função:

// console.log('Fora da function', idade)

// rodando com o Node.JS:
// ERRO: ReferenceError: idade is not defined
// Porque a variável só foi definida DENTRO do ESCOPO
// ESCOPO: { }

// var VAZA escopo em for, if's e whiles.
// utilizando LET esse erro não ocorre



// Rodando no nodeJS com cons =>

function imprimeIdade() {
    for (const idade = 20; idade <= 100; idade++) {
        console.log('Idade da Sabrina', idade )
    }
    console.log('Idade da Sabrina', idade)
}

imprimeIdade()


// Não roda // TypeError: Assignment to constant variable.
// Você não pode reatribuir valores à uma constante.

// Qual usar?
// => const na MAIORIA das vezes;
// => let quando const não pode ser utilizado; 



