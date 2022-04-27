// vídeo para reassistir: https://www.youtube.com/watch?v=dPl3OTOOJwM

// Forma não usual de fazer um loop! 

console.log('Estou aprendendo!')
console.log('Estou aprendendo!')
console.log('Estou aprendendo!')
console.log('Estou aprendendo!')
console.log('Estou aprendendo!')

// Dessa maneira, iria reproduzir a mensagem 5 vezes;

// Maneira correta de reproduzir esse loop utilizando FOR;

for (let i = 1; i <= 5; i++){
    console.log('Estou aprendendo',i);
}

//Explicação:
// i = 1 // contador inicial;
// i <= 5 // minha condição;
// i++ // meu encremento;
// logo, irá reproduzir uma lista de 5 frases repetidas.


// Exibir apenas os números impares até o 5 

for (let i = 1; i <= 5; i++){
    if (i % 2 !== 0) {
        console.log(i)
    }
}

// 1
// 3
// 5

// Exibir de 5 a 1 de forma DECRESCENTE;

for (let i = 5; i >= 1; i--){ //decremento 
    if (i % 2 !==0) { // operador módulo em JS
        console.log(i)
    }
}

// 5
// 3
// 1

