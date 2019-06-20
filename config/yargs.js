const op = {
    base: {
        demand: true,
        alias: "b"
    },
    limite: {
        alias: "l",
        default: 10
    }
}

const argv = require("yargs")
    .command("listar", "imprime la tabla de multiplicar", op)
    .command("crear", "crea el archivo", op)
    .help()
    .argv;

module.exports = {
    argv
}