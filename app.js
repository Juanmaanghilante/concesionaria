// En esta primera etapa, necesitamos requerir tu módulo autos y guardarlo en la variable
//  autosImportados que se encuentra en la misma carpeta del archivo donde estás trabajando. 
// Recordá que es el mismo archivo que creaste en la etapa anterior. 

// Además, necesitarás crear un objeto literal llamado concesionaria que contendrá
//  todas las funcionalidades que el cliente solicita.


// Por último, nuestro objeto literal debe tener un atributo llamado autos que contenga la lista de automóviles
//  importada anteriormente.
const autosImportados = require("./autos") //importo modulo local de autos


// Etapa 3
// Ahora que la concesionaria tiene los autos, es posible crear la funcionalidad buscarAuto que reciba
//  por parámetro
//  la patente y devuelva el auto al cual le corresponde. En caso de no encontrar el mismo, 
//  deberá retornar null.

// Para que todo funcione tenés que agregar el código que escribiste en el ejercicio anterior. 

// Te sugerimos utilizar this.autos en lugar de autosImportados.

// Recordá que cuando trabajamos con Arrays tenemos varios métodos para iterar sobre ellos,
//  y uno de ellos nos sirve para buscar.

//etapa 2

//aca creo la funcionalidad de buscar autos por  la patente
const concesionaria = {
  autos: autosImportados, 

  buscarAuto:function(patente){
    let buscar= this.autos.find(row => row.patente==patente )
if ( buscar) {return buscar}
else {return null 
}
},

// etapa 4 Ahora, María les pide que agreguen la funcionalidad de 
//venderAuto que recibe la patente y, en caso de encontrar al automóvil, le asigna el estado de vendido.
venderAuto: function(patente) {
 
  let autoVendido= this.buscarAuto(patente)
  if( autoVendido !=null 

  ){
    autoVendido.vendido=true
  return autoVendido
  
  }else return null
  
},
// etapa 5
autosParaLaVenta:function() {
  return this.autos.filter(row=>row.vendido==false)
},
// etapa  6
autosNuevos:function(){
  return this.autosParaLaVenta().filter(row =>row.km <100);
},
//etapa 7 
listaDeVentas:function(){

  let lista= this.autos.filter(row =>row.vendido == true);
  const totalVentas=lista.map(numero => numero.precio)

  return totalVentas
}
}








console.log(concesionaria.buscarAuto ("APL123"))
console.log(concesionaria.venderAuto ("APL123"))
console.log(concesionaria.autosParaLaVenta("APL123"));
console.log(concesionaria.autosNuevos());
console.log(concesionaria.listaDeVentas());
