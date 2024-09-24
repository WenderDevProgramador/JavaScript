
let a = 0 // considerado falso

let b = null // considerado falso

let c = 'Teste' // considerado verdadeiro

c = a || 42

console.log(a || b || c);

console.log(a ?? b ?? c);
 

