// Escreva uma class que sejá capaz de armazenar 3 coordenadas, determinar o setor em que se encontram suas coordenadas e sua distância em relação a estação espacial localizada no ponto (0, 0, 0).
// Além disso temos a distribuição dos setores da seguinte forma:
// - Alfa: [positivo, positivo, positivo]
// - Beta: [ positivo, positivo,negativo] 
// - Gama: [positivo,negativo, positivo]
// - Delta: [positivo,negativo,negativo]
// - Epsilon: [negativo, positivo, positivo]
// - Zeta: [negativo, positivo, negativo]
// - Sigma: [negativo, negativo, positivo]
// - Ômega: [negativo, negativo, negativo]
// Considere 0 como positivo, para garantir que um ponto estará em um unico setor.

// Entrada: ([37,42,15]) => Saída:Alfa Saída distancia: 57.94825277780168
// Entrada: [144,49,0] Alfa Saída distancia: 152.10851389715174


class Location {
    constructor(x, y, z) {
        this.coordinates = [x, y, z];
    }

    static sectors = {
        "+++": "Alfa",
        "++-": "Beta",
        "+-+": "Gama",
        "+--": "Delta",
        "-++": "Epsilon",
        "-+-": "Zeta",
        "--+": "Sigma",
        "---": "Ômega"
    }

    getSector() {
        const sign = this.coordinates.map(coord => (coord >= 0 ? "+" : "-")).join("");
        return Location.sectors[sign];
    }

    getDistance() {
        return Math.sqrt(this.coordinates[0] ** 2 + this.coordinates[1] ** 2 + this.coordinates[2] ** 2);
    }

}


const point1 = new Location(37, 42, 15);
console.log(point1.getSector());
console.log(point1.getDistance());

const point2 = new Location(144, 49, 0);
console.log(point2.getSector());
console.log(point2.getDistance());

const point3 = new Location(-37,0, 0);
console.log(point3.getSector());
console.log(point3.getDistance());

const point4 = new Location(-19, -80, -32);
console.log(point4.getSector());
console.log(point4.getDistance());