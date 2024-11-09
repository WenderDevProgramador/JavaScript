function multPers(num) {
    if (num < 10) { // Se o número já for um único dígito, a persistência é 0
        return 0;
    }

    let passos = 0; // Variável para contar o número de multiplicações

    while (num >= 10) { // Enquanto o número tiver mais de um dígito
        num = num
            .toString()
            .split('')
            .reduce((accum, atual) => accum * atual, 1); // Multiplica os dígitos
        passos++; // Conta o passo
    }

    return passos;
}
