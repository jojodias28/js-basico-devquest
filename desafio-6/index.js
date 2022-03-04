
const numero1 = Number(prompt("Olá digite um número"))
const numero2 = Number(prompt("Agora digite outro número"))

somar = () => {

    let soma = numero1 + numero2

    return (`A soma dos dois números é: ${soma}`)
}

let resultadoDaSoma = somar()
console.log(resultadoDaSoma)

dividir = () => {

    let divisao = numero1 / numero2

    return (`A divisão dos dois números é: ${divisao}`)
}

let resultadoDaDivisao = dividir()
console.log(resultadoDaDivisao)

multiplicar = () => {

    let multiplicacao = numero1 * numero2

    return (`A multiplicação dos dois números é: ${multiplicacao}`)
}

let resultadoDaMultiplicacao = multiplicar()
console.log(resultadoDaMultiplicacao)

subtrair = () => {

    let subtracao = numero1 - numero2

    return (`A divisão dos dois números é: ${subtracao}`)
}

let resultadoDaSubtracao = subtrair()
console.log(resultadoDaSubtracao)
