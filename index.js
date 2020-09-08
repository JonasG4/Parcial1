//Modulos
let Operaciones = require('./Modulo-Operaciones.js');
let Total = require('./Modulo-Callback.js')

//Variables
let PagoPorHora = 14;
let HorasDeProyecto = 200;
let TotalPersonas = 20;
let CosteDeMateriales = 9800;
// Punto número uno - Precio total pagado por horas de trabajo.
console.log('------------------------------');
console.log('Precio por hora: $'+PagoPorHora+"\n");
console.log('Cantidad de horas de trabajo: '+HorasDeProyecto+' Horas'+"\n");
console.log('Precio por Persona: $' + Operaciones.valor(PagoPorHora,HorasDeProyecto));
console.log('------------------------------');

//Punto Numero tres - Cantidad de personas en el proyecto y el precio
let PagoPorPersona = Operaciones.valor(PagoPorHora,HorasDeProyecto); // Se captura el pago total por horas en el proyecto de una persona
//Retornos
Total(PagoPorPersona, 20, (err, cantidad) => {
if (err){
  //Manejo de Errores
  console.log("ERROR: " + err.message)
}
else{
  console.log("Total de personas: "+TotalPersonas+"\n");
  console.log("Coste total para Personas: $" + cantidad.Resultado());
  console.log('------------------------------');
  //Punto Numero Cuatro - Asignar costo de materias y mostrar costo total del proyecto
  console.log('Costo de Materiales: $'+CosteDeMateriales+"\n");
  let ProyectoTotal = Operaciones.TotalProyecto(cantidad.Resultado(),CosteDeMateriales );
  console.log('Costo Total del Proyecto: $'+ ProyectoTotal +"\n");
  //Punto Numero dos - Holguera dl 8%
   console.log('Holguera: $' + Operaciones.Holguera(ProyectoTotal));
   console.log('------------------------------');
}}
)
