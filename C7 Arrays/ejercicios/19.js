function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  producto = 1;
   for(var i = 0; i < arguments.length; i++){
      if(arguments.length < 0){
         return 0;
         break;
      }else if(arguments.length === 0){
         return arguments[i];
         break
      }else if(arguments[i] != 0){
         producto = (arguments[i]*producto);
      }
   }
   return producto;
}

module.exports = multiplicarArgumentos;
