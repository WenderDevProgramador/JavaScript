var num = [50,0,20,1,9,15,10,50,0,20,1,9,10]
num.push(22)
num.sort()

/*for (var c = 0; c < num.length;c++) {
    console.log(` A posição ${c} tem o valor ${num[c]}`)
}
  */  

for (var c in num) {
    console.log(num[c])
}

console.log(`O número 15 está na posição ${num.indexOf(15)}`)
console.log(`O número 18 está na posição ${num.indexOf(18)}`)

let l = ['maçã','Arroz']
console.log(l)
