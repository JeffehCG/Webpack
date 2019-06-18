// module.exports = class Pessoa { //Sistema de modulos do CommonJS (Modulo padrão do Node)
//ou 

import './modulos/moduloA' // - import do arquivo moduloA.js na pasta modulos para que ele seja executado no webpack
export default class Pessoa { // - padrão de modulo do ECMA script (Oficial da propria linguagem) exportando
    cumprimentar() {
        return 'Bom dia!!'
    }
}