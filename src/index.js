//imports
const express = require(`express`);
const app = express();


//configuraciones
const PORT = 4000;

//middlewars


//rutas a servicios
app.get(`/`,(req, res) => {
    res.send(`<h1>Hola mundo</h1>`);
})

// CRUD -> Tareas
// GET: listado de tareas - http://localhost:4000/api/tareas
app.get(`/api/tareas`,(req, res) => {
	res.send([{nombre: `tarea 1`},{nombre: `tarea 1`}])
});
// GET: una tarea determinada - http://localhost:4000/api/tareas/:id
//
// POST: crear una tarea - http://localhost:4000/api/tareas -> en el body el json de la tarea
// PUT: actualizar una tarea - http://localhost:4000/api/tareas -> en el body el json de la tarea
// DELETE: eliminar una tarea determinada - http://localhost:4000/api/tareas/:id
// cambiar el estado de una tarea
// buscar tareas por algun criterio



//iniciar app
app.listen(PORT, () => console.info(`Listen in ${PORT}`));