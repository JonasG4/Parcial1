//Esta funcion calcula el precio de todos los empleados por horas de trabajo
module.exports = (ValorIndvidual, CantidadPersonas, callback) => {
if (ValorIndvidual == null || ValorIndvidual == 0)
       setTimeout(() => callback(new error('Valor es incorrecto'), null),
       2000);

else
 setTimeout(() =>
    callback(null, {
      Resultado: () => (ValorIndvidual * CantidadPersonas)
    }),
    2000);
}
