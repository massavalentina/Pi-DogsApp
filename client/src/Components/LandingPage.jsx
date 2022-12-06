import React from "react";
import {Link} from 'react-router-dom';
import'./LandingPage.css';

export default function LandingPage () {
    return (
        
        <div className= "backgroundLan"> 
            <div>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Pacifico&display=swap" rel="stylesheet"/>
            </div>

            
              
            <h1 className="h1Landing">The Dogpedia</h1>
                   
                   
            <Link to='/home'>
                <button className="itemLan">ENTER</button>
            </Link>
           
        </div>
    )
}