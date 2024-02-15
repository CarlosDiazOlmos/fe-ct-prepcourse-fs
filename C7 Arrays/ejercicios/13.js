function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  /*var nuevoArray = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
      nuevoArray.push(i);
    }
  }
  return nuevoArray;*/
  return array.filter(numero => numero % 2 === 0);
}

module.exports = filtrarNumerosPares;
