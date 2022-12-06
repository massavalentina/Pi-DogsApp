const { Dog, Temperament} = require('../db')
const axios = require('axios');


const getDbInfo = async () => {
    let perroMapeado1 =  await Dog.findAll({
       include: {
           model: Temperament,
           atributes: ['name'],
           through: {
               attributes: [],
           }
       }
   })
   perroMapeado1 = perroMapeado1.map(dog => {return {
       id: dog.id,
       name:dog.name,
       weight_min: dog.weight_min,
       weight_max: dog.weight_max,
       lifeTime: dog.lifeTime,
       image: dog.image,
       createdInDb: dog.createdInDb,
       height: `${dog.height_min} - ${dog.height_max}`,
       temperament : dog.temperaments.map(e => {return e.name}).join(',')
   }})
   console.log(perroMapeado1)
   return perroMapeado1

}



module.exports =  {getDbInfo} ;
