// utilizando o 'this'
// this com function normal: retorna apenas o objeto na qual está inserido. 
// this com arrow function: retorna o objeto window. 
 

const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    console.log(this)
}); 

