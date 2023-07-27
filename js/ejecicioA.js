console.log('----------------------------------------------------------------')
console.log('                            Ejercicio A'                         )
console.log('----------------------------------------------------------------')

var cantidadDeGatos = 10
var emojis = ['😺', '😸', '😹',]
for( var i = 1; i <= cantidadDeGatos; i++){
    var emojisIndice = emojis[ ( i - 1) % 3 ]
    console.log('Gato #' + i + ': ' + emojisIndice)
}

