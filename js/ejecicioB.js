console.log('----------------------------------------------------------------')
console.log('                           Ejercicio B'                          )
console.log('----------------------------------------------------------------')


var cantidadDeGatos = 10;
var cantidadDePasos = 5;
var gato = '🐈';
var pasos = '🐾';


for (var i = 1; i <= cantidadDeGatos; i++) {
  var pasosRepetidos = '';
  for (var j = 1; j <= cantidadDePasos; j++) {
    pasosRepetidos = pasosRepetidos + pasos;
  }
  console.log('Gato #' + i + ': ' + gato + pasosRepetidos);
}

