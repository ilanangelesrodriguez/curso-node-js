/**
 * Función que realiza la suma de dos números.
 *
 * @param {number} a - El primer número que se sumará.
 * @param {number} b - El segundo número que se sumará.
 * @returns {number} La suma de los dos números proporcionados como argumentos.
 *
 * @example
 * const resultado = sum(3, 5);
 * console.log(resultado); // Salida esperada: 8
 */
function sum(a, b) {
    return a + b;
}

// Exporta la función para su uso como módulo en otros archivos.
module.exports = sum;
