const axios = require('axios');
const { Dog, Temperament} = require('../db')
const {getApiInfo} = require('./getApiInfo')
const {getDbInfo} = require('./getDbInfo')

const getAllInfo = async () => {
    let dbInfo = await getDbInfo();
    let apiInfo = await getApiInfo();
    let allInfo = apiInfo.concat(dbInfo);
    return allInfo; 
}


module.exports = {getAllInfo};
