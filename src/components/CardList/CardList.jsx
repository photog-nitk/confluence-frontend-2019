import React from 'react';
import './card-list.css';
import Card from '../Card/Card';

const CardList = (props) =>{
    return(
        <div className="card-list">
            {props.developers.map(developer => (
                <Card key={developer.id} developer={developer} />
            ))}
        </div>
    )
}

export default CardList;