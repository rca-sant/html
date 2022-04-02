let num = [10, 7, 9, 2, 4, 8]

// console.log(num.sort())

// console.log(num.sort(()=>{}))

// console.log(num.sort((a, b)=>{}))

// console.log(num.sort((a, b)=>{console.log(a, b)}))

// console.log(num.sort((a, b)=>{
//     console.log(a, b)
//     if (a > b) {
//         return 1
//     } else if (a < b) {
//         return -1
//     } else {return 0}
// }))



for (let pos=0; pos<num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

for (let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

for (let pos of num){
    console.log(`O valor ${pos}`)
}