
const { Dog, Temperament} = require('../db')
const { getAllInfo } = require('../controllers/getAllInfo')

const getDogs = async (req,res) => { 
    const name = req.query.name
    const allDogs = await getAllInfo();
    try{
        if(name) {
            const dogSelected = allDogs.filter((dog) => dog.name.toLowerCase().includes(name.toLowerCase()))
            if (dogSelected.length){
                return res.status(200).send(dogSelected)
            } else {
                return res.status(404).send({error: 'Dog not found'})
            }
        } else {
            return res.status(201).json(allDogs)
        } 
    } catch(error){
        res.status(404).send({error: 'Dog not foud'})
    }
};


const getById = async (req, res) => {
    const { idRaza } = req.params
    const allDogs = await getAllInfo();
    try {
            const dogSelected = allDogs.filter((dog) => dog.id == idRaza)
            if (dogSelected.length){
                return res.status(200).send(dogSelected)
            } 
    } catch (error) {
        return res.status(404).send({error: 'The dog is at the park'})
    }
};

const postDogs = async (req,res) => {
    // try{
        let {
            name,
            height_min,
            height_max,
            weight_min,
            weight_max,
            lifeTime,
            createdInDb,
            temperament
        } = req.body;

        const dogChecked = await Dog.findOne({
            where: { name: name }
        })
        if(dogChecked) {
            return res.status(404).send('The dog already exist')
        } else {
            let DogCreated = await Dog.create({
                name,
                height_min,
                height_max,
                weight_min,
                weight_max,
                lifeTime,
                createdInDb
            })
            
            let tempDeDB = await Temperament.findAll({
                where: {name: temperament}
            }) 
            DogCreated.addTemperament(tempDeDB)
            return res.status(200).send('The dog was created')
        }
    }

     
    // const deleteDogs = async (req, res) => {
    //     const {id} = req.params;
    //     try {
    //       if (id) {
    //         res.status(200).send("Dog eliminated")
    //       }
    //     } catch (error) {
    //       res.status(404).json(error)
    //     }
    //   };

module.exports = {getDogs, getById, postDogs, };  
// deleteDogs