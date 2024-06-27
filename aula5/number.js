let nota1 = prompt ('Qual a nota 1?')
let nota2 = prompt ('Qual a nota 2?')
let nota3 = prompt ('Qual a nota 3?')

nota1 = parseFloat (nota1)
nota2 = parseFloat(nota2)
nota3 = parseFloat(nota3)

console.log(typeof nota1)

let media = (nota1 + nota2 + nota3) / 3

console.log(media)