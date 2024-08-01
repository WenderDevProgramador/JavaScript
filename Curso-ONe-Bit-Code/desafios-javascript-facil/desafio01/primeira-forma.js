
function calculoMedia(lista) {
    media = 0;
    for (let i = 0; i < lista.length; i++) {
        media += lista[i];
    };
    
    return media/lista.length;
};

console.log(calculoMedia([10,9,6,8,9,1,5,7]));