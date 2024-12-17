import React, { useState } from 'react';
import "./cards.css";
import { Link } from 'react-router-dom';
import { getPeopleImageClass, getFilmImageClass, getPlanetsImageClass, getStarshipsImageClass, getSpeciesImageClass } from "../../../img/resourcesImg.js";
import { useContext } from 'react';
import { Context } from '../../store/appContext.js';

export const Cards = (props) => {
    const { store, actions } = useContext(Context);
    const { type, name, link, title, uid, key} = props; 
    const [isLiked, setIsLiked] = useState(false)

    const item = { 
        key: key, 
        uid: uid, 
        name: name, 
        title: title, 
        type: type,
        link: link
    };


    const onLike = () => {
        setIsLiked(true)
        actions.getFavouriteItems(item);   
    };  



    let backgroundImageUrl = "https://i.gifer.com/1UGy.gif";

    switch (type) {
        case "person":
            backgroundImageUrl = getPeopleImageClass(name);
            break;
        case "planet":
            backgroundImageUrl = getPlanetsImageClass(name);
            break;
        case "films":
            backgroundImageUrl = getFilmImageClass(name);
            break;
        case "starships":
            backgroundImageUrl = getStarshipsImageClass(name);
            break;
        case "species":
            backgroundImageUrl = getSpeciesImageClass(name);
            break;
        default:
            backgroundImageUrl = "https://i.gifer.com/1UGy.gif";
    }

		return (

        
        <div className='card-container'> 
            <div className="card-content" style={{backgroundImage: `url(${backgroundImageUrl})`}}>
                <div className='description'>
                    <h6>{name}</h6>
                    <div className='btn-actions'>
                        <Link to={link} className='details-btn'> More details </Link>
                        <i className={`fa-solid fa-heart ${isLiked ? "liked" : ""}`} 
                        onClick={onLike} style={{ cursor: "pointer" }}></i>
                    </div>
                </div>
            </div>
        </div>
    );

};
