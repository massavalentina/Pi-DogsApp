const { Router } = require('express');
const dogsRouter = require("./dogsRouter.js");
const temperamentsRouter = require("./temperamentsRouter.js");

const mainRouter = Router();

// mainRouter.use("/people", peopleRouter);
// Configurar los routers

mainRouter.use('/dogs', dogsRouter);

mainRouter.use('/temperaments', temperamentsRouter);




module.exports = mainRouter;





















// https://github.com/Frannmoreno/PI-Dogs/blob/main/api/src/Controllers/Controllers.js#L5