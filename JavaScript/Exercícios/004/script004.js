function tabuada() {
    let num = document.getElementById('txtn')
    let res = document.getElementById('res')

    if (num <=0 || num.value.length == 0) {
        window.alert('Digite um número válido!')
    } else {
        let n = Number(num.value) 
        res.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            res.appendChild(item)
        }
    }
}