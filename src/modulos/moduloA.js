const moduloB = require('./moduloB') //(Modulo padrão do Node)
console.log(moduloB.saudacao())

//Para que o arquivo moduloA.js seja executado no webpack , é preciso fazer um import no arquivo principal, ou em algum conectado a ele