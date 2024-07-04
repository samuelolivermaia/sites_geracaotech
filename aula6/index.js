// let numero = +prompt('Insira um número:')

// alert(
//     'O numero'
//     + numero
//     + 'é'
//     + numero % 2 ? 'impar' : 'par'
// )


// let a = false
// let b = true

// if (a === b){
//     if (a) {

//     }else{
//         b
//     }
// }


let numero = +prompt('Insira um número')

if(numero % 2 === 0) {
    numero += 5
}else{
    numero += 8
}

alert('O resultado é: ' + numero)