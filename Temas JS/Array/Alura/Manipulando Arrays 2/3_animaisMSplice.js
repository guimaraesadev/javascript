// O splice é usado para adicionar e remover elementos de uma lista, como mostra o seguinte código:

let animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠')
animaisDoAquario.splice(3,2,'🐟')

console.log(animaisDoAquario)


//return: [ '🐋', '🐠', '🐙', '🐟' ]
