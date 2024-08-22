

console.log(dragonBallZCharacters);


let n = [1,5,36,19,1,1,4,7,128,51,93,57,42,103]

const m = n.sort((a,b)=> a-b)

console.log(m)



const dragonBallZCharacters = [
    { nome: "Goku", poderDeLuta: 900000000, raca: "Saiyajin", idade: 37, altura: 1.75, sexo: "Masculino" },
    { nome: "Vegeta", poderDeLuta: 850000000, raca: "Saiyajin", idade: 38, altura: 1.64, sexo: "Masculino" },
    { nome: "Gohan", poderDeLuta: 750000000, raca: "Saiyajin", idade: 23, altura: 1.80, sexo: "Masculino" },
    { nome: "Piccolo", poderDeLuta: 400000000, raca: "Namekuseijin", idade: 29, altura: 2.26, sexo: "Masculino" },
    { nome: "Trunks", poderDeLuta: 600000000, raca: "Saiyajin", idade: 18, altura: 1.70, sexo: "Masculino" },
    { nome: "Goten", poderDeLuta: 300000000, raca: "Saiyajin", idade: 17, altura: 1.68, sexo: "Masculino" },
    { nome: "Bulma", poderDeLuta: 5, raca: "Humano", idade: 45, altura: 1.65, sexo: "Feminino" },
    { nome: "Kuririn", poderDeLuta: 200000, raca: "Humano", idade: 39, altura: 1.53, sexo: "Masculino" },
    { nome: "Yamcha", poderDeLuta: 180000, raca: "Humano", idade: 42, altura: 1.83, sexo: "Masculino" },
    { nome: "Tenshinhan", poderDeLuta: 250000, raca: "Humano", idade: 46, altura: 1.87, sexo: "Masculino" },
    { nome: "Mestre Kame", poderDeLuta: 139, raca: "Humano", idade: 340, altura: 1.65, sexo: "Masculino" },
    { nome: "Majin Boo", poderDeLuta: 1200000000, raca: "Majin", idade: 0, altura: 1.50, sexo: "Masculino" },
    { nome: "Freeza", poderDeLuta: 500000000, raca: "Alienígena", idade: 70, altura: 1.75, sexo: "Masculino" },
    { nome: "Cell", poderDeLuta: 1000000000, raca: "Androide", idade: 0, altura: 2.10, sexo: "Masculino" },
    { nome: "Androide 18", poderDeLuta: 320000000, raca: "Androide", idade: 27, altura: 1.69, sexo: "Feminino" },
    { nome: "Androide 17", poderDeLuta: 350000000, raca: "Androide", idade: 27, altura: 1.71, sexo: "Masculino" },
    { nome: "Androide 16", poderDeLuta: 400000000, raca: "Androide", idade: 0, altura: 2.20, sexo: "Masculino" },
    { nome: "Chi-Chi", poderDeLuta: 130, raca: "Humano", idade: 43, altura: 1.63, sexo: "Feminino" },
    { nome: "Videl", poderDeLuta: 80, raca: "Humano", idade: 22, altura: 1.57, sexo: "Feminino" },
    { nome: "Dende", poderDeLuta: 1500, raca: "Namekuseijin", idade: 30, altura: 1.40, sexo: "Masculino" },
    { nome: "Mestre Karin", poderDeLuta: 200, raca: "Humano", idade: 800, altura: 1.20, sexo: "Masculino" },
    { nome: "Mr. Satan", poderDeLuta: 20, raca: "Humano", idade: 50, altura: 1.88, sexo: "Masculino" },
    { nome: "Chaoz", poderDeLuta: 10000, raca: "Humano", idade: 40, altura: 1.38, sexo: "Masculino" },
    { nome: "Kami-sama", poderDeLuta: 1500, raca: "Namekuseijin", idade: 300, altura: 2.26, sexo: "Masculino" },
    { nome: "Bardock", poderDeLuta: 100000, raca: "Saiyajin", idade: 40, altura: 1.78, sexo: "Masculino" },
    { nome: "Raditz", poderDeLuta: 1500, raca: "Saiyajin", idade: 36, altura: 1.90, sexo: "Masculino" },
    { nome: "Nappa", poderDeLuta: 4000, raca: "Saiyajin", idade: 50, altura: 2.10, sexo: "Masculino" },
    { nome: "Zarbon", poderDeLuta: 23000, raca: "Alienígena", idade: 40, altura: 1.83, sexo: "Masculino" },
    { nome: "Dodoria", poderDeLuta: 22000, raca: "Alienígena", idade: 50, altura: 1.80, sexo: "Masculino" },
    { nome: "Ginyu", poderDeLuta: 120000, raca: "Alienígena", idade: 42, altura: 1.96, sexo: "Masculino" },
    { nome: "Recoome", poderDeLuta: 40000, raca: "Alienígena", idade: 41, altura: 2.50, sexo: "Masculino" },
    { nome: "Jeice", poderDeLuta: 40000, raca: "Alienígena", idade: 40, altura: 1.77, sexo: "Masculino" },
    { nome: "Burter", poderDeLuta: 43000, raca: "Alienígena", idade: 39, altura: 2.23, sexo: "Masculino" },
    { nome: "Guldo", poderDeLuta: 12000, raca: "Alienígena", idade: 37, altura: 1.20, sexo: "Masculino" },
    { nome: "Kibito", poderDeLuta: 4000000, raca: "Kaiohshin", idade: 1000, altura: 2.00, sexo: "Masculino" },
    { nome: "Kaiohshin do Leste", poderDeLuta: 8000000, raca: "Kaiohshin", idade: 1000, altura: 1.85, sexo: "Masculino" },
    { nome: "Dabura", poderDeLuta: 15000000, raca: "Demônio", idade: 2000, altura: 2.00, sexo: "Masculino" },
    { nome: "Videl", poderDeLuta: 200, raca: "Humano", idade: 18, altura: 1.57, sexo: "Feminino" },
    { nome: "Marron", poderDeLuta: 5, raca: "Humano", idade: 3, altura: 0.90, sexo: "Feminino" },
    { nome: "Oolong", poderDeLuta: 10, raca: "Porquinho", idade: 28, altura: 1.30, sexo: "Masculino" },
    { nome: "Pual", poderDeLuta: 10, raca: "Gato", idade: 28, altura: 0.40, sexo: "Masculino" },
    { nome: "Yajirobe", poderDeLuta: 970, raca: "Humano", idade: 43, altura: 1.65, sexo: "Masculino" },
    { nome: "Kaioshin Ancião", poderDeLuta: 500000, raca: "Kaiohshin", idade: 10000, altura: 1.70, sexo: "Masculino" },
    { nome: "Arale", poderDeLuta: 1000000, raca: "Androide", idade: 0, altura: 1.50, sexo: "Feminino" },
    { nome: "Tapion", poderDeLuta: 800000, raca: "Alienígena", idade: 1000, altura: 1.85, sexo: "Masculino" },
    { nome: "Pan", poderDeLuta: 10000, raca: "Saiyajin", idade: 4, altura: 0.90, sexo: "Feminino" },
    { nome: "Uub", poderDeLuta: 5000000, raca: "Humano", idade: 10, altura: 1.40, sexo: "Masculino" },
    { nome: "Shenlong", poderDeLuta: 999999, raca: "Dragão", idade: 10000, altura: 100.00, sexo: "Masculino" }
];
const ordenar = dragonBallZCharacters.sort((a,b)=> a.raca.localeCompare(b.raca));

console.log(ordenar)