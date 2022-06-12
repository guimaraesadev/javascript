// https://imasters.com.br/desenvolvimento/escopos-em-javascript


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

