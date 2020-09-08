let Individual = require('./Procesos.js');
let Total = require('./Total.js')

// Punto número uno - Precio total pagado por horas de trabajo.
console.log('------------------------------');
console.log('El precio por hora: $14');
console.log('');
console.log('Cantidad de horas de trabajo: 200 Horas');
console.log('');
console.log('Precio del empleado: $' + Individual.valor(14,200)); //(PrecioPorHora, Cantidad de Horas)
console.log('------------------------------');

//Punto Numero dos - Holguera dl 8%


//Punto Numero tres - Cantidad de personas en el proyecto y el precio
let PagoPorPersona = Individual.valor(14,200); // Se captura el pago total por horas en el proyecto de una persona
Total(PagoPorPersona, 20, (err, cantidad) => {
if (err){
  console.log("ERROR: " + err.message)
}
else{
  console.log("El total de personas: 20");
  console.log("");
  console.log("Pago total: $" + cantidad.Resultado());
  console.log('------------------------------');}}
)

//Punto Numero Cuatro - Asignar costo de materias y mostrar costo total del proyecto

console.log('Costo de Materiales: 2800');
console.log('Costo Total del Proycto: ' + Individual.TotalProyecto(2800, ));
