/*
Escreva uma classe que seja capaz de amarzenar 3 coordenadas , determinar o setor em que se encontram suas coordenadas e sua distância em relação à estação espacial (coordenada [0,0,0]).

Distribuição dos setores :

- Alfa: [positivo, positivo, positivo]
- Beta: [positivo,positivo,negativo]
- Gama: [positivo, negativo, positivo]
- Delta: [positivo,negativo,negativo]
- Épsilon: [negativo,positivo,positivo]
- Zeta: [negativo,positivo,negativo]
- Sigma: [negativo, negativo, positivo]
- Ômega: [negativo,negativo,negativo]

Considere 0 como positivo para garantir que um ponto estará apenas em um único setor.

Testes:

Entrada: [37,42,15]
Saída: Alfa
Saída distancia: 57.94825277780168


*/

class Location {
    constructor(x, y, z) {
        this.coordinates = [x, y, z];
    }

    static sectors = {
        '+++': 'Alfa',
        '++-': 'Beta',
        '+-+': 'Gama',
        '+--': 'Delta',
        '-++': 'Épsilon',
        '-+-': 'Zeta',
        '--+': 'Sigma',
        '---': 'Ômega'
    };

    getSector() {
        const signs = this.coordinates.map(coord => coord >= 0 ? '+' : '-').join('');
        return Location.sectors[signs];
    }

    getDistance() {
        return Math.sqrt(this.coordinates.reduce((accum, coord) => accum + (coord ** 2), 0));
    }
}

const a = new Location(37, 42, 15);

console.log(a.getSector(), '\n', a.getDistance());
