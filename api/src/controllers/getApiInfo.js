
const axios = require('axios');
// const API_KEY = "live_HpOXHTLKe6MYxF2Vogc2sMk8U0ZcUR0d5PiiYAqItQdNVJKwyttzLdB9VAAOC3kx"
// const Dogs = `https://api.thedogapi.com/v1/breeds/?api_key=${API_KEY}`;

const getApiInfo = async () => {
    const dogsURL = await axios.get('https://api.thedogapi.com/v1/breeds');
    let dogsInfo = await dogsURL.data.map((dog) => {
        return {
            id : dog.id,
            name : dog.name,
            temperament : dog.temperament,
            weight_min : parseInt(dog.weight.imperial.split("-")[0]),
            weight_max : parseInt(dog.weight.imperial.split("-")[1]),
            height: dog.height.metric,
            lifeTime : dog.life_span,
            image : dog.image.url,
            }
        })
         return dogsInfo
        
    }

module.exports =  {getApiInfo} ;
