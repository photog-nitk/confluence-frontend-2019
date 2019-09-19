import React from 'react';
import './card.css';

const Card = (props) =>{
    return(
        <div className='card-container'>
            <img alt={`${props.developer.name}`} src={`https://robohash.org/${props.developer.id}?set=set1&size=180x180`}></img>
            <h2 >{props.developer.name}</h2>
            <p>{props.developer.email}</p>
        </div>
    )
}

export default Card;