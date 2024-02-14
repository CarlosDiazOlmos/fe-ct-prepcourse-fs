function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
var temp = 1;
for (var i = a; i <= b; i++){
  temp = temp * i;
}
return Math.abs(temp);
}

module.exports = productoEntreNúmeros;