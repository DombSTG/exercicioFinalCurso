let numarr = []
let res = document.getElementById('res')

function numero () {
    let nu = Number(document.getElementById('num').value)
    let numero = document.getElementById('numero')

    if (nu < 1 || nu > 100) {
        alert('[ERRO] Valor Inválido!')
    } else if (numarr.indexOf(nu) === -1) {
        numarr.push(nu)
        let item = document.createElement ('option')
        item.text = `Valor ${nu} adicionado`
        numero.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor já adicionado anteriormente')
    }

    nu.value = ''
    nu.focus()
}

function calc() {
    numarr.sort()
    let texto = ""

    let maior = numarr[0]
    let menor = numarr[0]
    let soma = 0
    let media

    if (numarr.length == 0) {
        alert("Adicione valores antes de finalizar")
    } else {
        for (let i in numarr) {
            if (numarr[i] > maior) {
                maior = numarr[i]
            } else if (numarr[i] < menor) {
                menor = numarr[i]
            }
            
            soma += numarr[i]
        }
    }

        media = soma / numarr.length



    texto += `<strong>Ao todo, temos ${numarr.length} números cadastrados.<br><br></strong>`
    texto += `<strong>O maior valor informado foi ${maior}.<br><br></strong> `
    texto += `<strong>O menor valor informado foi ${menor}.<br><br></strong>`
    texto += `<strong>Somando todos os valores, temos ${soma}.<br><br></strong>`
    texto += `<strong>A media dos valores digitados é ${media}</strong>`
    res.innerHTML = texto


}