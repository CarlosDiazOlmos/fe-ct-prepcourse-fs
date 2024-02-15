function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
 /* var temp = Math.max(array);
  for(let i = 0; i < array.length; i++){
    if(array[i] === temp){
      return  i ;
    }
  }*/
  let maxNumero = array[0];
  let maxIndice = 0;
  
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxNumero) {
      maxNumero = array[i];
      maxIndice = i;
    }
  }
  
  return maxIndice;

}

module.exports = encontrarIndiceMayor;
