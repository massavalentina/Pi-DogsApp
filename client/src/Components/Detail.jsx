import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getDetail, cleanDetail } from '../Redux/Actions'
import { Link } from 'react-router-dom';
import Logo from "../favicon.ico";
import './Detail.css' 

export default function Detail(props) {
    const dispatch = useDispatch();
    const dog = useSelector((state) => state.dogDetail)
    

    useEffect(() => {
        dispatch(getDetail(props.match.params.id));
        return dispatch(cleanDetail())
    }, [dispatch]);

    return(
        
        
        
        <div className="backgroundDetail" >

            <div>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Pacifico&display=swap" rel="stylesheet"/>
            </div>
     
          
        <div className="containernavDetail">
        
          <nav>
           
           
          <span className="navbarDetail">
          <Link to="/home">
            <img id="logoHenry" src={Logo} alt="a happy dog icon"/>
          </Link> 
          <span className="titleDetail">The dogpedia</span>
          
          </span>
          
          </nav>
       </div>

             <div>
                <Link to={'/home'}>
                    <button className="buttonDetail"> Home </button>
                </Link>
            </div>
            <div >
            {Object.keys(dog).length ? 
            <div className="contDetail">
                <div className="itemDetail">
                    <img src={dog[0].image ? dog[0].image : dog[0].image = "https://i.pinimg.com/564x/c8/95/cb/c895cbcb780afd24022e1befd36bbe73.jpg"} alt="woof" width="400" height="400" />
            
            
                    <h2> Name: {dog[0].name}</h2>
                    <h2> Life Temp: {dog[0].lifeTime}</h2>
                    <h2> Weight: {dog[0].weight_min} - {dog[0].weight_max} kg</h2>
                    <h2> Height: {dog[0].height} cm</h2>
                    <h2>Temperaments:</h2>
                    <h2>{dog[0].temperament}</h2>
                    
                </div>

            </div>
                : <div className="loadingDetail"> Loading...</div> }
            </div>
        </div>
     )
};