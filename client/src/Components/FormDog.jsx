import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link, useHistory} from "react-router-dom";
import Logo from "../favicon.ico";
import  './FormDog.css'
import { postDog, getTemperaments } from "../Redux/Actions";
import validate from './FormValidate'




    export default function CreateDog () {

        const dispatch = useDispatch();
    
        const history = useHistory()
    
        const t = useSelector((state) => state.temperaments)   //manejo de estado de los temperamentos
    
        const [errors , setErrors] = useState({})
    
        const [input, setInput] = useState({
            name : "",
            height_min:0,
            height_max:0,
            weight_min:0,
            weight_max:0,
            lifeTime:0,
            temperament:[]
        })
    
        const handleChange = (e) =>{
            setInput({
                ...input,
                [e.target.name]: e.target.value,
            })
            console.log(e.target.value)
            setErrors(validate({
                ...input,
                [e.target.name] : e.target.value
            }))
            console.log(input)
        }
    
        useEffect(() => {
            dispatch(getTemperaments()) 
        },[dispatch])
    
        const handleSelect = (e) => {
                if(!input.temperament.includes(e.target.value)){
                    setInput({
                        ...input,
                        temperament : [...input.temperament, e.target.value]
                    })
                }
        }
        console.log(handleSelect)
        
    
        const handleSubmit = (e) =>{
            e.preventDefault()
            console.log(input)
            dispatch(postDog(input))
    
            alert("The dog was created")
            setInput({
                name: "",
                height_min: 0,
                height_max: 0,
                weight_min: 0,
                weight_max: 0,
                lifeTime: 0,
                temperament: [],
               
            })
            history.push('/home')
        }

      
        const handleDelete = (e) => {
            setInput({
                ...input,
                temperament : input.temperament.filter(d => d !== e)
            })
        }

        
    return (
        
        <div className="backgroundForm">
            <div>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Pacifico&display=swap" rel="stylesheet"/>
            </div>
          
        <div className="containernavForm">
        
          <nav>
           
           
          <span className="navbarForm">
          <Link to="/home">
            <img id="logoHenry" src={Logo} alt="a happy dog icon"/>
          </Link> 
          <span className="titleForm">The dogpedia</span>
          </span>
          
          </nav>
       </div>
        <div className='containerForm'>
            <div className='containerBtnHome'>
                <Link to={'/home'}>
                    <button className="itemForm"> Home </button>
                </Link>
            </div>
          <form id="breedForm" className='divForm' onSubmit={handleSubmit}>
            <div>

                <label>Name: </label>
                <input autoComplete='off' className='inputStyle' name='name' value={input.name} onChange={handleChange} />
                {errors.name && (<a className='danger'>{errors.name}</a>)}
            </div>


            <div>
                <h4>Weight (Kg)</h4>
                <label> Min: </label>
                <input min='0' className='inputStyle' type="number" name='weight_min' value={input.weight_min} onChange= { e => handleChange(e)}  />
                {errors.weight_min && (<a className='danger'>{errors.weight_min}</a>)}
                <label> Max: </label>
                <input min='0' className='inputStyle' type="number" name='weight_max' value={input.weight_max} onChange= { e => handleChange(e)} />
                {errors.weight_max && (<a className='danger'>{ errors.weight_max}</a>)}
            </div>


            <div>
                <h4>Height (cm) </h4>
                <label> Min:  </label>
                <input min='0' className='inputStyle' type="number" name='height_min' value={input.height_min} onChange= { e => handleChange(e)}  />
                {errors.height_min && (<a className='danger'>{errors.height_min}</a>)}
                <label> Max:  </label>
                <input min='0' className='inputStyle' type="number" name='height_max' value={input.height_max} onChange= { e => handleChange(e)}  />
                {errors.height_max && (<a className='danger'>{errors.height_max}</a>)}
            </div>


            <div>
                <h4>Life a (years) </h4>
                <input min='0' className='inputStyle' type='number' value={input.lifeTime} name="lifeTime" onChange={e => handleChange(e)} />
                {errors.lifeTime && (<a className='danger'>{errors.lifeTime}</a>)}
            </div>


            {/* <div>
                <label>Image url: </label>
                <input type="text" className='inputStyle' value={input.img} name="image" onChange={(e) => handleChange(e)}/>
                {errors.image && (<a className='danger'>{errors.image}</a>)}
            </div> */}


            <div>
                <label>Temperaments </label>
                    <select  onChange={handleSelect} className='inputStyle'>
                        {t && t.map((t) => (
                            <option key={t.id} value={t.name}>{t.name}</option>
                        ))}
                    </select>
            </div>
            <div className='temp' >
                {input.temperament.map(e => (
                    <div className='btnT' key={e}>
                        <p>{e}</p>
                        <button onClick={() => handleDelete(e)} className="delete">x</button>
                    </div>
                ))}
            </div>

            <div>
                <button className='itemForm' type='submit'>Create Dog</button>
            </div>
          </form>
          
        </div>
        </div>
    );
}