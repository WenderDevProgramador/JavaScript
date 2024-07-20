const medida = prompt('Qual é a medida em metros?')

const medidaValor = parseFloat(medida)

const converMedida = prompt('Qual a medida deseja converter?\nA)milímetro(mm)\nB)centímetro(cm)\nC)decímetro(dm)\nD)decâmetro(dam)\nE)hectômetro(hm)\nF)quilômetro(km)')

switch (converMedida) {
    case "A":
        alert(`${medidaValor*1000}mm`)
        break
    case "B":
        alert(`${medidaValor*100}cm`)
        break
    case "C":
        alert(`${medidaValor*10}dm`)
        break
    case "D":
        alert(`${medidaValor/10}dam`)
        break
    case "E":
        alert(`${medidaValor/100}he`)
        break
    case "F":
        alert(`${medidaValor/1000}km`)
        break
    default:
        alert('Opção invalida!!')
}
  