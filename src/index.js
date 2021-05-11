//imports
const express = require('express');
const app = express();

const tareasRouter = require('./routes/tareasRoutes');


//configuraciones
const PORT = 4000;

//middlewars


//rutas a servicios
app.use(tareasRouter);


//iniciar app
app.listen(PORT, () => console.info(`Listen in ${PORT}`));