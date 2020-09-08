//Esta funcion calcula el precio de un empleado por horas de trabajo.
exports.valor = (PxH,CH) => (PxH*CH);

//Esta funcion determina la holguera del Proyecto
exports.Holguera =(PrecioProyecto) =>(PrecioProyecto * 0.08);

//Esta funcion obtiene el costo total del proyecto
exports.TotalProyecto = (CMateriales, CPersonas) => (CMateriales + CPersonas)
