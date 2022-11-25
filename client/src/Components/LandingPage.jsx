import React from "react";
import {Link} from 'react-router-dom';
import style from './LandingPage.css';

export default function LandingPage () {
    return (
        <div className= {style.background}> 

            <div className={style.divStyle}>
                <div className={style.info}>
                    <h1>WELCOME TO THE DOGPEDIA</h1>
                    
                </div>
                <Link to='/home'>
                <button className={style.button}>WOAF!</button>
                </Link>
            </div>
        </div>
    )
}