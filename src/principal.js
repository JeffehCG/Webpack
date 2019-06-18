// const Pessoa = require('./pessoa') //Sistema de modulos do CommonJS (Modulo padrão do Node)
//ou

import Pessoa from './pessoa' // - padrão de modulo do ECMA script (Oficial da propria linguagem)
import './assets' // importando arquivo da pasta assets (por padrão ira procurar o arquivo index.js)

const atendente = new Pessoa
console.log(atendente.cumprimentar())