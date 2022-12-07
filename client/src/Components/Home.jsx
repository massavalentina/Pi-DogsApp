import React, {useState, useEffect, Fragment} from 'react' ;
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import { getAllDogs, getTemperaments, filterCreatedDog, filterByTemperament, filterByName, filterByWeight } from "../Redux/Actions";
import Card from "./Card";
import Paginate from './Paginate'
import Footer from './Footer';
import Navbar from './Navbar';
import './Home.css'



export default function Home () {
    const dispatch = useDispatch()
    const allDogs = useSelector((state) => state.dogs)
    const allTemperaments = useSelector((state) => { return state.temperaments})
    const [orden, setOrden] = useState("")
    const [charge, setCharge] = useState(false);
    const [currentPage, setCurrentPage] = useState(1)
    const [dogsPerPage, setDogPerPage] = useState(8)
    const indexLastDog = currentPage * dogsPerPage
    const indexFirstDog = indexLastDog - dogsPerPage
    const currentDogs = allDogs.slice(indexFirstDog,indexLastDog)
    
    
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getAllDogs());
        dispatch(getTemperaments());
    },[])

    useEffect(() => {
        setCharge(true);
        setTimeout(() => {
            setCharge(false);
        }, 5000);
        dispatch(getAllDogs());
    }, []);

    function handleClick (e) {
        window.location.reload(false);
    }

    function handlerFilterCreated (e) {
        dispatch(filterCreatedDog(e.target.value))
        setCurrentPage(1)
    }
    
    function handlerFilterTemperament (e) {
        e.preventDefault();
        dispatch(filterByTemperament(e.target.value))
        setCurrentPage(1)
    }

    function handlerFilterName (e) {
        dispatch(filterByName(e.target.value))
        setCurrentPage(1)
        setOrden(`Ordenado ${e.target.value}`)
    }

    function handlerFilterWeight (e) {
        dispatch(filterByWeight(e.target.value))
        setCurrentPage(1)
        setOrden(`Ordenado ${e.target.value}`)
    }

    return (
        <div>
        <div>
        
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"
/>
                <link href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Pacifico&display=swap" rel="stylesheet"/>
                </div>
            <Navbar>
                <div >
                    <Link to="/">
                        <button className='itemHome'>Dogpedia</button> 
                    </Link>
                
                </div>
            </Navbar>
            <div className='backgroundHome' >
        
            <header>
      
             <div>
                    <button  className='itemHome' onClick={e =>{handleClick(e)}}>Get dogs again</button>
                    <Link to='/create'>
                    <button className='itemHome'>Create Dog</button>
                    </Link>
            </div>
        
            <div>
                <div>
                    <div>
                        {/* FILTRO POR NOMBRE (A-Z,Z-A) */}
                        <select defaultValue = "Order by name" className='itemHome'
                            onChange={e => handlerFilterName(e)}>
                           <option disabled selected defaultValue>Order by name</option>
                            <option key={1} value='A-Z'>A-Z</option>
                            <option key={2} value='Z-A'>Z-A</option>
                        </select>


                        {/* FILTRO POR PESO (MAX-MIN) */}
                        <select defaultValue = "Order by weight" className='itemHome'
                            onChange={e => handlerFilterWeight(e)}>
                            <option disabled selected defaultValue>Order by weight</option>
                            <option key={1} value="max_weight">Max</option>
                            <option key={2} value="min_weight">Min</option>
                        </select>

                            {/* FILTRO POR ORIGEN  */}
                        <select defaultValue = "Order by created" className='itemHome'
                            onChange={e => handlerFilterCreated(e)}>
                            <option disable selected defaultValue>Order by created</option>
                            <option key={1} value='all'>All</option>
                            <option key={2} value='created'>Created</option>
                            <option key={3} value='api'>Api</option>
                        </select>

                            {/* FILTRO TEMPERAMENTOS */}
                        <select defaultValue = "Temperaments" className='itemHome'
                            onChange={e => handlerFilterTemperament(e)}>
                            <option disabled selected defaultValue>Temperaments</option>
                            <option key={1+'e'} value='All'>All</option>
                            {
                                allTemperaments.map(temp => (
                                    <option value={temp.name} key={temp.id}>{temp.name}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
            </div>
            
            </header>    
        

            <Paginate dogsPerPage={dogsPerPage} allDogs={allDogs.length} paginado={paginado}/>
                
                <div>  
                    {Object.keys(allDogs).length ? 
                        <div className='cards' >  
                            {
                            currentDogs?.map((el) => {
                                return(
                                    <div key={el.id}>
                                    {
                                        <Card key={el.id} id={el.id} image={el.image} name={el.name} temperament={el.temperament}  weight_min={el.weight_min} weight_max={el.weight_max}/>
                                    }
                                    </div>
                                    
                                    )
                                })}
                                <div>
                                    <Footer/>
                                </div>
                        </div> :
                            <div>
                                <span className='loading'>Loading...</span>
                            </div>}
                </div>
                </div>
                </div>
            
    )}