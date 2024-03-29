import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { getDogName } from '../Redux/Actions'
import { useHistory } from "react-router-dom";


export default function SearchBar () {
    const dispatch = useDispatch();
    const [searchDog, setSearchDog] = useState('')
    const history = useHistory();
    

    const handleInput = (e) => {
        e.preventDefault()
        setSearchDog(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(searchDog)
        dispatch(getDogName(searchDog))
        setSearchDog('')
        
    }

    return (
        <span >
            <form>
                <input className='item' type="text" onChange={e => handleInput(e)} value={searchDog} placeholder="Search..."/>
                <button className='item' type="submit" onClick={e => handleSubmit(e)}>Look for</button>
            </form>
        </span>
    )
}