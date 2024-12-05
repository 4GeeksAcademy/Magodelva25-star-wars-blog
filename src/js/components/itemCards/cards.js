import React, { useContext } from 'react';
import "./cards.css";
import { Context } from '../../store/appContext';

export const Cards = () => {
    
    const { store } = useContext(Context)
  
    return (
      <>  
   {
    store.people.map((person) => {
    return(
    <div className='card-container' key={person.uid}>
        <img src='https://starwars-visualguide.com/assets/img/characters/1.jpg'/>
        <div className='card-content'>
            
            <h6>{person.name}</h6>
            <p>descripcion</p>
        </div>
    </div>
    )})
    }
    </>
  )
}