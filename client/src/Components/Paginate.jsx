import React from "react";
import style from "./Paginate.css"

export default function Paginate({ dogsPerPage, allDogs, paginado }) {
    const pageNumbers =[];

    for (let i = 1; i < Math.ceil(allDogs / dogsPerPage); i++) { //cantidad de elementos totales, dividido limite de elementos por pagina
        pageNumbers.push(i + 1);
    }

    return(
        <div className='containerPag'>
            <ul className='listPag' >
                {pageNumbers?.map((number) => {
                    return(<li className= 'item' key={number}>
                         <a  onClick={() => paginado(number)}>{number}</a> 
                    </li>)
                })}
            </ul>
        </div>
    )
};

