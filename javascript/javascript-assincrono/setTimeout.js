// setInterval e setTimeout
// são funções de alta ordem (recebem outras funções como parametro);
// execultam a função depois de um tempo decorrido;
// a setTimeout executa apenas uma vez (depois de 2 segundos)
// a setInterval executa em intervalos de tempo (a cada 2 segundos)

// setTimeout()
// 1º parametro: a função callback (arrow function)
// 2º parametro: o tempo de execução

let timeoutId = setTimeout(() => {
    console.log("Executando após 2s")
}, 2000)

// clearTimeout() para PARAR a execução. 

clearTimeout(timeoutId)