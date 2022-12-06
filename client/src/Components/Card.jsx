import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
import DogImage from "./dog.jpg"

// import {useDispatch} from 'react-redux';
// import { deleteDog } from "../../Redux/Actions";

export default function Card ({ image, name, temperament, weight_min, weight_max, id}) {
    // const dispatch = useDispatch()

    // function handleDelete (id) {
    //     dispatch(deleteDog(id))
    // }


    return (
  

       
        <div className='containerCard'> 

            <div>
                <Link to={`/home/${id}`}>
                <span className='name'>{name}</span> 
                </Link>
            </div>
        
        
            <div>
                <img src={image || DogImage} alt={name} height= '200px' width='200px'/>
            </div>


            <div >
                <h5>{temperament}</h5>
            </div>
            <div>
                <h5>MIN. WEIGHT: {weight_min} Kg / MAX. WEIGHT {weight_max} Kg</h5>        
                        {/* <button onClick={() => handleDelete(id)}>X</button> */}
            </div>
            
        </div>


       
    )
}