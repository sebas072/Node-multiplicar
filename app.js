const { crearArchivo, listarTabla } = require("./multiplicar")
const argv = require("./config/yargs").argv;



//console.log(argv.limite);

let com = argv._[0];
console.log(com);
switch (com) {
    case "listar":
        listarTabla(argv.base, argv.limite)
        break;
    case "crear":
        crearArchivo(argv.base, argv.limite)
            .then(A => console.log("Archivo: " + A))
            .catch(err => console.log(err));
        break;
    default:
        console.log("entrada no valida");
        break;
}