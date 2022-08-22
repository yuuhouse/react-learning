//https://youtu.be/NIq3qLaHCIs

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
const numbers = ['0', '1', '2', '3', '4', '5', '6']

/* const a= alphabet[0]
const b= alphabet[1] */
const [a, , c, ...rest] = alphabet //in order of alphabet

const newArray=[...alphabet, ...numbers]

console.log(a)
//console.log(b)
console.log(c)
console.log(rest)
console.log(newArray)
