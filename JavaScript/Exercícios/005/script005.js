var n = []

function adicionar() {
    var num = document.getElementById('txtn')
    var res = document.getElementById('res')
    if (num.value < 1 || num.value > 100 || num.value.length == 0 || n.indexOf(Number(num.value)) != -1) {
        window.alert('Valor inválido ou já encontrado na lista!')
    } else {
        n.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${Number(num.value)} adicionado`
        res.appendChild(item)
        n.sort()
    }
}

function finalizar () {
    const sum = n.reduce((prev,cur)=>prev+cur,0)
    var soma = 0
    for (let pos=0; pos<n.length; pos++) {
        soma += n[pos]
    }
    total = n.length
    menor = n[0]
    maior = n[total-1]
    media = soma / n.length
    let final = document.getElementById('final')
    final.innerHTML = `Ao todo, temos ${total} números cadastrados. <br> <br> O maior valor informado foi ${maior}. <br> <br> O menor valor informado foi ${menor}. <br> <br> Somando todos os valores, temos ${sum}. <br> <br> A média dos valores digitados é ${media}.` 
}