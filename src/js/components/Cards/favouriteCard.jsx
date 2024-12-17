import React from 'react';
import "./cards.css";
import { Link } from 'react-router-dom';
import { getPeopleImageClass, getFilmImageClass, getPlanetsImageClass, getStarshipsImageClass, getSpeciesImageClass } from "../../../img/resourcesImg.js";

export const FavCards = (props) => {


    let backgroundImageUrl = "https://i.gifer.com/1UGy.gif";

    switch (props.type) {
        case "person":
            backgroundImageUrl = getPeopleImageClass(props.name);
            break;
        case "planet":
            backgroundImageUrl = getPlanetsImageClass(props.name);
            break;
        case "films":
            backgroundImageUrl = getFilmImageClass(props.name);
            break;
        case "starships":
            backgroundImageUrl = getStarshipsImageClass(props.name);
            break;
        case "species":
            backgroundImageUrl = getSpeciesImageClass(props.name);
            break;
        default:
            backgroundImageUrl = "https://i.gifer.com/1UGy.gif";
    }

    return (
        <div className='card-container'>
            <div className="card-content" style={{backgroundImage: `url(${backgroundImageUrl})`}}>
                <div className='description'>
                    <h6>{props.name}</h6>
                    <div className='btn-actions'>
                        <Link to={props.link} className='details-btn'> More details </Link>
                        <i className="fa fa-trash" 
                        onClick={props.function}
                        style={{ cursor: "pointer" }}></i>
                    </div>
                </div>
            </div>
        </div>
    );
};
