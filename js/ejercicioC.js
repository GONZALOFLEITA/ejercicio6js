console.log('----------------------------------------------------------------')
console.log('                           Ejercicio '                          )
console.log('----------------------------------------------------------------')


var cantidadDeGatos = 20;
var cantidadDePasos = 6;

// Bucle para mostrar los gatos alternadamente con la cantidad de pasos indicada
for (var i = 1; i <= cantidadDeGatos; i++) {
  var gatoEmoji = '🐈' + (i % 2 === 0 ? '⬛' : ''); // Agrega '⬛' si es un número par
  
  var pasos = '';
  for (var j = 0; j < cantidadDePasos; j++) {
    pasos = pasos + '🐾';
  }

  console.log('Gato #' + i + ': ' + gatoEmoji + ' ' + pasos);
}

