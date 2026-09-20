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

    updateClassification(str) {
        const [racer, action] = str.split(' ');

        if( action.includes('ELIMINATE')) {
            this.eliminateRacer(racer);
        } else {
            this.updateRacer(racer, action);
        }
    }

    updateRacer(racer, action) {
        const eliminated = this.racers.filter(r => r.includes('ELIMINATED'));
        const active = this.racers.filter(r => !r.includes('ELIMINATED'));

        const currentPosition = active.indexOf(racer);
        const updatedPosition = currentPosition + parseInt(action) * -1;

        if(updatedPosition >= this.racers.length || updatedPosition < 0) {
            console.log('Invalid position');
            return;
        }

        active.splice(currentPosition, 1);
        this.racers = [...active.slice(0, updatedPosition), racer, ...active.slice(updatedPosition), ...eliminated];


    }

    eliminateRacer(racer) {
        const eliminated = this.racers.filter(r => r.includes('ELIMINATED'));
        const active = this.racers.filter(r => !r.includes('ELIMINATED'));

        active.splice(active.indexOf(racer), 1);
        this.racers = [...active, `${racer} ELIMINATED`, ...eliminated];
    }
}

const racel = new Race('Alfa', 'Beta', 'Gama', 'Delta');

console.log(racel)
racel.updateClassification('Beta + 1');
console.log(racel)

console.log(racel)
racel.updateClassification('Gama -1');
console.log(racel)

console.log(racel)
racel.updateClassification('Delta ELIMINATE');
console.log(racel)

console.log(racel)
racel.updateClassification('Gama + 2');
console.log(racel)

console.log(racel)
racel.updateClassification('Alfa + 4');
console.log(racel)




console.log(racel.getClassification());