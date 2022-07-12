// setInterval e setTimeout
// são funções de alta ordem (recebem outras funções como parametro);
// execultam a função depois de um tempo decorrido;
// a setTimeout executa apenas uma vez (depois de 2 segundos)
// a setInterval executa em intervalos de tempo (a cada 2 segundos)


// setInterval()

let seconds = 0
let intervalId = setInterval(() => {
    seconds += 2
    console.log(`Executando após ${seconds} segundos`)
    if (seconds >= 10) clearInterval(intervalId)
}, 2000)


