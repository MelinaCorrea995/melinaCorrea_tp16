const fs = require ('fs'); //modulo nativo de node.js
const bicicletas = fs.readFileSync('./bicicletas.json','utf8');   //utf8 Codificación de caracteres 
//console.log(bicicletas); 
const bicis = JSON.parse(bicicletas)
module.exports= bicis
