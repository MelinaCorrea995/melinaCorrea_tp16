const bicicletas = require('./datosBici.js');
const dhBici = {
    bicicletas: bicicletas,

    buscarBici: function (id) {  //a
        const bici = this.bicicletas.filter(bici => bici.id === id)
        if (bici.length > 0) {
            return bici
        } else {
            return null
        }
    },

    venderBici: function (id) { //b
        const vender = this.buscarBici(id)
        if (vender.length > 0) {
            vender[0].vendida = true
            return vender
        } else {
            return "Bicicleta no encontrada"
        }
    },

    biciParaLaVenta: function () { //c
        const biciVenta = this.bicicletas.filter(bici => bici.vendida === false)
        return biciVenta
    },

    totalDeVentas: function () { //d
        const biciVendidas = this.bicicletas.filter(bici => bici.vendida === true)
        const total = biciVendidas.reduce((acum, indice) => {
            return acum + indice.precio;
        }, 0)
        return total
    },

    // OPCIONAL 

    aumentoBici: function (aumento) { //1
        bicicletas.map(bici => {
            bici.precio = bici.precio * (1 + (aumento * 0.01))
        })
        return bicicletas


    },

    biciPorRodado: function (rodado) { //2
        return bicicletas.filter(bici => bici.rodado === rodado)
    },

    listarTodasLasBici: function () { //3
        for (const bicis of this.bicicletas) {
            console.log(bicis);
        }
    }
}
// console.log(dhBici.buscarBici(2)); //a
// console.log(dhBici.venderBici(3)) //b
//  console.log(dhBici.biciParaLaVenta()) //C
// console.log(dhBici.totalDeVentas()) //d
console.log(dhBici.aumentoBici(20))
// console.log(dhBici.biciPorRodado(29)) // OPCIONAL 2
// dhBici.listarTodasLasBici() //OPCIONAL 3
