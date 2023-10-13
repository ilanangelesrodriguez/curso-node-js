const os = require('node:os')

console.log('Informacion del sistema operativo:')
console.log('----------------------------------')

console.log('Nombre: ', os.platform())
console.log('Version: ', os.version())
console.log('Arquitectura: ', os.arch())
console.log('CPUs', os.cpus())  // Podemos escalar procesos con node

console.log('Memoria libre: ', os.freemem() / 1024 / 1024)
console.log('Memoria total: ', os.totalmem() / 1024 / 1024)
console.log('uptime: ', os.uptime() / 60 / 60)

