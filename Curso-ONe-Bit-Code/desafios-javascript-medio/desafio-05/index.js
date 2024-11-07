/*
Escreva uma classe Equation que seja capaz de lidar com uma equação até o segundo grau. Os objetos podem ser instanciados com valores padrões para a = 0, b = 0, e c=0. Ela deve ter um método para retornar suas raízes na forma de um array vazio, de um ou dois elementos. O método também deve descrever os passos para a resolução da equação.Se a, b e c forem todos iguais a 0 ela não deve calcular as raízes e deve retornar uma mensagem de erro.

Entrada: (0,2,6)
saida: 
1.2x + 6 = 0
2.2x = -6
3. x = -6/2
4.x = -3
[-3]
*/

class Equation {
    constructor (a=0,b=0,c=0) {
        this.a = a
        this.b = b
        this.c = c
    }

    getRoots () {
        if (this.a === 0 && this.b === 0 && this.c === 0) {
            return 'Erro ! Nenhum parâmetro informado!'
        }

        if (this.a === 0 && this.b === 0) {
            console.log('1. Parâmetros insuficientes.\nNenhuma raiz.')
            return []
        }

        if (this.a === 0 ) {
            console.log(`1. ${this.b} X + ${this.c} = 0`)
            console.log(`2. ${this.b} X = ${this.c * -1} `)
            console.log(`3. X = ${this.c * -1} / ${this.b} = 0`)
            console.log(`4. x = ${(this.c * -1) / this.b}`)

            return [(this.c * -1) / this.b]
        }

        const delta = this.b ** 2 - (4*this.a * this.c)
        console.log(`1. Delta = ${this.b}² - 4 * ${this.a} * ${this.c}`)
        console.log(`2. Delta = ${delta}`)

        if (delta < 0){
            console.log(`Delta < 0 Nenhuma raiz.`)

            return []
        }

        console.log(`3. X' = (- (${this.b})) + raiz ${delta} / 2* ${this.a}`)
        console.log(`4. X" = (- (${this.b})) + raiz ${delta} / 2* ${this.a}`)
        console.log(`5. X' = ${this.b * -1} + raiz ${delta} / ${this.a * 2}` )
        console.log(`6. X' = ${this.b * -1} - raiz ${delta} / ${this.a * 2}` )

        const x1 = (this.b + Math.sqrt(delta) / (2 * this.a))
        const x2 = (this.b - Math.sqrt(delta) / (2 * this.a))

        if (Number.isInteger(Math.sqrt(delta))) {
            console.log(`7. X' = ${this.b * -1} + ${Math.sqrt(delta)} / ${this.a * 2}`)
            console.log(`8. X" = ${this.b * -1} - ${Math.sqrt(delta)} / ${this.a * 2}`)
            console.log(`9. X' = ${x1} `)
            console.log(`10. X" = ${x2} `)
        }

        return x1 === x2 ? [x1] : [x1,x2]
    }
}

const equação = new Equation(3,4,5)

console.log(equação.getRoots())