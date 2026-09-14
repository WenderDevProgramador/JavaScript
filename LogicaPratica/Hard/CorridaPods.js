// Escreva um programa que recebe uma lista de classificação de nomes e uma string no formato "Nome +n" (ou -n), onde n é a quantidade de posições para subir ou descer na classificação, e retorne essa mesma lista com a classificação atualizada. A função também deve ser capaz de receber "Nome ELIMINATE", nesse caso o participante deve ser jogado para o fim da lista  e deve ser acrescentado um "ELIMINATED" ao seu nome indicando que foi eliminado.

// Os participantes eliminados não podem ter nenhum corredor não eliminado atras deles na lista.

// Assuma que sempre receberar uma entrada válida no formato "Corredor AÇÃO".

// Testes:  

// Classificação inicial: 'Alfa', 'Beta', 'Gama' e 'Delta'.
// Entrada: ('Beta + 1')
// Classificação: 'Beta', 'Alfa', 'Gama', 'Delta'
// Entrada: ('Gama - 1')
// Classificação: 'Beta', 'Alfa', 'Delta', 'Gama'


class Race {
    constructor(...racers) {
        this.racers = racers;
    }

    getClassification() {
        const classification = {};
        for (let i = 0; i < this.racers.length; i++) {
            classification[`${i + 1}º`] = this.racers[i];
        }
        return classification;
    }
}

const racel = new Race('Alfa', 'Beta', 'Gama', 'Delta');
console.log(racel.getClassification());