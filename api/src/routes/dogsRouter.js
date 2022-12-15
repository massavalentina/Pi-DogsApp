const {Router} = require("express")
const { getById,
        getDogs,
        postDogs,
        } = require('../controllers/dogsControllers')
// deleteDogs


const dogsRouter = Router()

dogsRouter.get('/', getDogs);
dogsRouter.get('/:idRaza', getById);
dogsRouter.post('/', postDogs);


module.exports = dogsRouter;