
const validate = (input) => {
    let errors = {}
    if(!input.name){
        errors.name = 'Must be a name'
    }

    if(input.name && !/^[a-zA-Z]*$/.test(input.name)){
        errors.name = 'The name can not contain numbers or special caracters'
    }

    if(!input.height_min || input.height_min <= 0){
        errors.height_min = 'The min height must be bigger'
    }
    if(!input.height_max || input.height_max <= 0){
        errors.height_max = 'The max height must be bigger'
    }


   
    if (!input.weight_min || input.weight_min <= 0){
        errors.weight_min = 'The min weight must be bigger'
    }

    
    if (!input.weight_max || input.weight_max <= 0){
        errors.weight_max = 'The max weight must be bigger'
    }

    if (!input.lifeTime || input.lifeTime <= 0){
        errors.lifeTime = 'The life span must be grather'
    }

    return errors

}

export default validate;