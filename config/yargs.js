const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multilicar', opts)
    .command('crear', 'Genera la tabla de multilicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}