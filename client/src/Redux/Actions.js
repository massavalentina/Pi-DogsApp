import axios from 'axios'

export const GET_ALL_DOGS = "GET_ALL_DOGS"
export const GET_TEMPERAMENTS= "GET_TEMPERAMENTS"
export const GET_DOG_NAME= "GET_DOG_NAME"
export const GET_DETAIL="GET_DETAIL"
export const POST_DOG="POST_DOG"
export const FILTER_BY_HEIGHT="FILTER_BY_HEIGHT"
export const FILTER_BY_NAME="FILTER_BY_NAME"
export const FILTER_BY_WEIGHT="FILTER_BY_WEIGHT"
export const FILTER_BY_TEMPERAMENTS="FILTER_BY_TEMPERAMENTS"
export const FILTER_CREATED_DOG="FILTER_CREATED_DOG"
export const CLEAN_DETAIL="CLEAN_DETAIL"




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
            type: "GET_TEMPERAMENTS",
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
            console.log(error)
        }
    }
}

export function getDetail(id) {
    return async function (dispatch) {
        try {
            var json = await axios.get(`/dogs/${id}`);
            return dispatch({
                type: "GET_DETAIL",
                payload: json.data
            })
        } catch(error) {
            console.log(error)
        }
    }
}

export function postDog (data){
    try{
        return async function () {
            const posted = await axios.post('/dogs', data);
            return posted
        }
    } catch(error) {
        console.log(error)
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

export function cleanDetail ()  {
    return {
        type : "CLEAN_DETAIL"
    }
}
// export function deleteDogs(id){
//     return async function (dispatch){
//         try{
//            await axios.delete(`/dogs/${id}`);
//             return dispatch({
//                 type: "DELETE_DOG",
//                 payload: id
//             })
//         } catch(error){
//             alert('no se pudo borrar el perro')
//         }
//     }
// }