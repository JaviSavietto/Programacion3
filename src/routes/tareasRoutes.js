const express = require(`express`);
const router = express.Router();

// CRUD -> Tareas
// GET: listado de tareas - http://localhost:4000/api/tareas
router.get(`/api/tareas`,(req, res) => {
	res.send([{nombre: `tarea 1`},{nombre: `tarea 1`}])
});
// GET: una tarea determinada - http://localhost:4000/api/tareas/:id
// POST: crear una tarea - http://localhost:4000/api/tareas -> en el body el json de la tarea
// PUT: actualizar una tarea - http://localhost:4000/api/tareas -> en el body el json de la tarea
// DELETE: eliminar una tarea determinada - http://localhost:4000/api/tareas/:id
// PUT: cambiar el estado de una tarea
// GET: buscar tareas por algun criterio

module.exports = router;