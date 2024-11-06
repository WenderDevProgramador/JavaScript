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
}