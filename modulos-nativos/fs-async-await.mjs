import { readFile } from 'node:fs/promises'


console.log("Leyendo el primer archivo.......")
const text = await readFile('./file.txt', 'utf-8')
console.log("---------------------------")
console.log("Primer texto: ", text)
console.log("---------------------------")

// callbacks son funciones que se ejecutan cuando una tarea a acabado

console.log('-----> Hacer cosas mientras lee el archivo.')

console.log("Leyendo el segundo archivo.......")
const secondText = await readFile('./file_2.txt', 'utf-8')
console.log("---------------------------")
console.log("Segundo texto: ", secondText)
console.log("---------------------------")
