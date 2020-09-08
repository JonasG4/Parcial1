//Esta funcion calcula el precio de un empleado por horas de trabajo.
exports.valor = (x,y) => (x*y);

//Esta funcion determina la holguera del Proyecto
exports.Holguera =(PrecioProyecto) =>(PrecioProyecto * 0.8);

//Esta funcion obtiene el costo total del proyecto
exports.TotalProyecto = (CMateriales, CPersonas) => (CMateriales + CPersonas)
