function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
   if (Object.prototype.toString.call(fecha) === "[object Date]" && !isNaN(fecha)) {
    return true;
  } else {
    return false;
  }

}

module.exports = esFechaValida;