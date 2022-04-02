// function parimp(n) {
//     if (n%2==0) {
//         return `O número ${n} é par`
//     } else {
//         return `O número ${n} é ímpar`
//     }
// }

// let res = parimp(11)

// console.log (`${res}`)

// function soma (n1=0, n2=0) {
//     return n1 + n2
// }

// console.log (soma (2,5))

// let v = function(x) {
//     return x*2
// }

// console.log(v(5))

//RECURSIVIDADE
function fatorial(n) {
    if (n == 1) {
        return "1"
    } else {
        return `${n}` + fatorial(n-1)
    }
}

console.log(fatorial(5))