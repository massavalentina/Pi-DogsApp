import axios from 'axios'

export function getAllDogs () {
    return async function (dispatch) {
        var json = await axios.get('/dogs');
        return dispatch({
            type: "GET_ALL_DOGS",
            payload: json.data
            })
        }
    }

export function getTemperaments() {
    return async function (dispatch) {
        var json = await axios.get('/temperaments')
        return dispatch({
            type: "GET_ALL_TEMPERAMENTS",
            payload: json.data
        })
    }
}

export function getDogName(name) {
    return async function (dispatch) {
        try{
            var json = await axios.get(`/dogs?name=${name}`)
            return dispatch({
                type: "GET_DOG_NAME",
                payload: json.data
            })
        } catch(error){
            alert('The dog could not be found')
        }
    }
}

export function getDog(id) {
    return async function (dispatch) {
        try {
            var json = await axios.get(`/dogs/${id}`);
            return dispatch({
                type: "GET_DOG_DETAIL",
                payload: json.data
            })
        } catch(error) {
            console.log(error)
        }
    }
}

export function postDog(payload) {
    return async function(dispatch) {
        try {
            const response = await axios.post("/dogs", payload)
            return {
                type:"POST_DOG",
                payload: response
            }
        }
        catch(error) {
            console.log(error)
        }
    }
  }

export function filterByHeight(payload){
    return {
        type: 'FILTER_BY_HEIGHT',
        payload
    }
}
 
export function filterByName(payload) {
    return { 
        type: "FILTER_BY_NAME",
        payload
    }
}

export function filterByWeight(payload) {
    return { 
        type: "FILTER_BY_WEIGHT",
        payload
    }
}

export function filterByTemperament(payload) {
    return{
        type: "FILTER_BY_TEMPERAMENTS",
        payload
    }
}

export function filterCreatedDog (payload) {
        return {
        type: "FILTER_CREATED_DOG",
        payload
    }
}

export function clearDetail ()  {
    return {
        type : "CLEAR_DETAIL"
    }
}
// export function deleteDog(id){
//     return async function (dispatch){
//         try{
//            await axios.delete(`/dogs/${id}`);
//             return dispatch({
//                 type: DELETE_DOG,
//                 payload: id
//             })
//         } catch(error){
//             alert('no se pudo borrar el perro')
//         }
//     }
// }