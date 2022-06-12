// https://imasters.com.br/desenvolvimento/escopos-em-javascript

// escopo, var e let;


// var global 
var animal = 'cat'
// ou
animal = 'cat' 


// função de escopo global 
// o problema: se eu tiver variáveis de mesmo nome, pode vazar escopo e bagunçar o código;

function hello (name) {
    // Isto aqui é um escopo
}
  
function foo () {
    // Escopo de foo
    function bar () {
      // Escopo de bar
    }
}
  
// utilizando let a gente garante que a variável vai aparecer uma única vez no escopo;

//obs: eu só consigo mudar valores de const se ela estiver relacionada com objetos
//ex:

const bina = {
    nome: Sabrina,
    age: 20, 
    cats: [Pitoco, Cebolinha]
}

bina.age = 20; 
// utilizando prop. de um objeto eu consigo reescrever.

// a variável em si, eu não consigo declarar novamente, porém a propriedade do 'objeto' eu consigo reescrever.

// logo: mesmo o 'objeto' estando dentro de uma 'const', ele não é imútavel
// parar tornar um objeto imutável:

Object.freeze(bina) 
// agora não posso redeclarar ou reescrever nenhuma propriedade do objeto. 
