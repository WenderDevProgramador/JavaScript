function areaTriangulo() {
    let base = parseFloat(prompt('Qual é o tamanho da base do triângulo'))
    let altura = parseFloat(prompt('Qual é a altura do triângulo?'))

    return base * altura / 2
}

function areaRetangulo() {
    let base = parseFloat(prompt('Qual é o tamanho da base do retângulo?'))
    let altura = parseFloat(prompt('Qual é a altura do retângulo?'))

    return base * altura
}

function areaQuadrado() {
    let lado = parseFloat(prompt('Qual é o tamanho do lado do quadrado?'))

    return lado ** 2
}

function areaTrapezio() {
    let maior = parseFloat(prompt('Qual é o tamanho da base maior?'))
    let menor = parseFloat(prompt('Qual é o tamanho da base menor?'))
    let altura = parseFloat(prompt('Qual é a altura ?'))

    return (menor + maior) * altura/2
}


function executar() {
    let menu
    let resultado 
    do {
        
        menu = parseFloat(prompt(`=== Calculadora Geométrica ===

        Escolha uma das opções:
        1. Calcular área de triângulo
        2. Calcular área de retângulo
        3. Calcular área de quadrado
        4. Calcular área de trapézio
        5. Calcular área de círculo
        6. Sair`))
        
        
        switch (menu) {
            case 1:
                resultado = areaTriangulo()
                break
            case 2:
                resultado = areaRetangulo()
                break
            case 3:
                resultado = areaQuadrado()
                break
            case 4:
                resultado = areaTrapezio()
                break
            case 5:
                resultado = areaTrapezio()
                break
            case 6:
                alert('Encerrando....')
                break   
            default:
                alert('Opção invalida!')
        }
    
    if (resultado) {
        alert(`RESULTADO: ${resultado}`)
    }

    } while (menu !== 6)
}

executar()

