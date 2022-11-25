const axios = require('axios');
const { Temperament} = require('../db')


const getTemperaments = async (req,res) => {
    try {
           const api = await axios.get('https://api.thedogapi.com/v1/breeds')
           const perros = await api.data.map (el => el.temperament)
           let perrosSplit = await perros.join().split(',')
           let perrosTrim = await perrosSplit.map(e => e.trim())
           await perrosTrim.forEach( async (e) => {
               if(e.length > 0){
                   await Temperament.findOrCreate({
                       where : {name : e}
                   })
               }
           })
           const allTemperament = await Temperament.findAll()
           // console.log(allTemperament)
           return res.status(200).json(allTemperament)
       }catch (error){
            res.status(404).send({error: 'There are not temperaments'})
        }
   };

   module.exports = {getTemperaments};





   ////otra forma para traer los temperaments:
// let dogs= (arr de temps de la api)
// let arrTemperaments = [];
//     dogs.forEach(t => { 
//      arrTemperaments.push(t.temperament)
//     })
// let arrSeparado = arrTemperaments.join(', ').split(', ')
// arrSeparado.reduce((arr, e) => {
// if(!arr.find(d => d === e)){
//  arr.push(e)
// }
// return arr;
// }, []) 