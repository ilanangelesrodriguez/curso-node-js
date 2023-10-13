/**
 * Módulo 'fs' proporcionado por Node.js para realizar operaciones de sistema de archivos.
 * @external fs
 * @see {@link https://nodejs.org/api/fs.html|Documentación de Node.js - Módulo 'fs'}
 */
const fs = require('node:fs')

const stats = fs.statSync('./file.txt')

console.log(
    stats.isFile(),         // Devuelve true si es un archivo.
    stats.isDirectory(),    // Devuelve true si es un directorio.
    stats.isSymbolicLink(), // Devuelve true si es un enlace simbólico.
    stats.size,             // Tamaño del archivo en bytes.
)
