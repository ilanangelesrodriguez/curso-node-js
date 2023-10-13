import { platform, version, arch, cpus, freemem, totalmem, uptime } from 'node:os'

console.log('Informacion del sistema operativo:')
console.log('----------------------------------')

console.log('Nombre: ', platform())
console.log('Version: ', version())
console.log('Arquitectura: ', arch())
console.log('CPUs', cpus())  // Podemos escalar procesos con node

console.log('Memoria libre: ', freemem() / 1024 / 1024)
console.log('Memoria total: ', totalmem() / 1024 / 1024)
console.log('uptime: ', uptime() / 60 / 60)

