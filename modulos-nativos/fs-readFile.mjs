import { readFile } from 'node:fs'

console.log("Leyendo el primer archivo.......")
readFile('./file.txt', 'utf-8', (err, text)=>{
    console.log("---------------------------")
    console.log("Primer texto: ", text)
    console.log("---------------------------")
})
// callbacks son funciones que se ejecutan cuando una tarea a acabado
console.log('-----> Hacer cosas mientras lee el archivo.')

console.log("Leyendo el segundo archivo.......")
readFile('./file_2.txt', 'utf-8', (err, text)=>{  // <--- ejecuta el callback
    console.log("---------------------------")
    console.log("Segundo texto: ", text)
    console.log("---------------------------")
})
