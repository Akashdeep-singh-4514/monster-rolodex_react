import React from 'react';
import './card-styles.css';

export const Card=(props)=>{

    return(<div className='card-container'>
        <img alt={props.monster.id} src={`https://robohash.org/${props.monster.id}?set=2/`} height={200 }width={200}></img>
        <h1>{props.monster.name}</h1>
        <h5>{props.monster.email}</h5>
        </div>);
}