// síncrono e assíncrono em Javascript
// uma execução síncrona segue um fluxo linear // só execulta uma instrução após a anterior ter sido executada;
// a execução assíncrona não aguarda o fim para ir para o próximo passo
// passa a instrução seguinte sem aguardar a conclusão da atual

// step by step 

function stepTwo() {
    console.log("Passo 2")
}

console.log("Passo 1")
stepTwo()
console.log("Passo 3")

console.log("Passo 4")

setTimeout(() => {
    console.log("Passo 5")
}, 1000)

console.log("Passo 6")


// setTimeout é assíncrono
// ele não aguarda o FIM da instrução para chamar o console.log("Passo 6")

// output:

/*
Passo 1
Passo 2
Passo 3
Passo 4
Passo 6

nota-se que o passo 6 foi executado antes do passo 5 com setTimeout por conta da assincronissidade;

Passo 5
*/