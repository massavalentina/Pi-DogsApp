const {Router} = require("express")
const { getById,
        getDogs,
        postDogs} = require('../controllers/dogsControllers')



const dogsRouter = Router()

dogsRouter.get('/', getDogs);
dogsRouter.get('/:idRaza', getById);
dogsRouter.post('/', postDogs);

module.exports = dogsRouter;