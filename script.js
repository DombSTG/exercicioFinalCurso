let numarr = []

function numero () {
    let nu = Number(document.getElementById('num').value)
    let res = document.getElementById('res')
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



}