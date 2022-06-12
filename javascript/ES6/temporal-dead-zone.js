// hoisting w/ var

console.log(cat)
var cat = 'meaw'
// output: undefined

// hoisting w/ const 

console.log(cat)
const dog = 'auau'
// output: cat is not defined; 

console.log(cow)
const cow = 'mu'
// output: cow is not defined;

// ou seja, o temporal dead-zone não permite que ocorra hoisting com const e let. 
