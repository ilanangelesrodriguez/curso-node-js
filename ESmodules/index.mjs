/**
 *  js -> por defecto utiliza CommonJS
 *  mjs -> por defecto utiliza ES modules
 *  cjs -> forzar a utilizar CommonJS
 */

/**
 * Importación de funciones matemáticas desde el módulo 'sum.mjs'.
 */
import { sum, sub, mul, div } from './sum.mjs';

/**
 * Uso de las funciones importadas.
 */
console.log(sum(1, 2)); // Salida esperada: 3
console.log(sub(1, 2)); // Salida esperada: -1
console.log(mul(1, 2)); // Salida esperada: 2
console.log(div(1, 2)); // Salida esperada: 0.5
