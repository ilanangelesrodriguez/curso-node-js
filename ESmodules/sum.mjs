/**
 * Módulo que contiene funciones matemáticas básicas.
 * @module operacionesMatematicas
 */

/**
 * Realiza la suma de dos números.
 *
 * @param {number} a - El primer número.
 * @param {number} b - El segundo número.
 * @returns {number} La suma de los dos números.
 * @function
 * @name sum
 * @memberof module:operacionesMatematicas
 */
export function sum(a, b) {
    return a + b;
}

/**
 * Realiza la resta de dos números.
 *
 * @param {number} a - El número del que se resta.
 * @param {number} b - El número que se resta.
 * @returns {number} La resta de los dos números.
 * @function
 * @name sub
 * @memberof module:operacionesMatematicas
 */
export function sub(a, b) {
    return a - b;
}

/**
 * Realiza la multiplicación de dos números.
 *
 * @param {number} a - El primer número.
 * @param {number} b - El segundo número.
 * @returns {number} El producto de los dos números.
 * @function
 * @name mul
 * @memberof module:operacionesMatematicas
 */
export function mul(a, b) {
    return a * b;
}

/**
 * Realiza la división de dos números.
 *
 * @param {number} a - El número dividendo.
 * @param {number} b - El número divisor (debe ser diferente de cero).
 * @returns {number} El cociente de la división.
 * @function
 * @name div
 * @memberof module:operacionesMatematicas
 */
export function div(a, b) {
    return a / b;
}
