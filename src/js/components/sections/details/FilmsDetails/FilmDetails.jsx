import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./FilmDetails.css"
import { getFilmImageClass } from "./../../../../../img/resourcesImg.js";

export const FilmDetails = () => {

  const params = useParams()
  const [filmData, setFilmData] = useState();

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/films/${params.id}`)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Error al obtener la información");
        }
        return resp.json();
      })
      .then((respJson) => {
        setFilmData(respJson.result.properties);
      })
      .catch((err) => console.error(err));
  }, [params.id]);

  let backgroundImageUrl = "https://i.gifer.com/1UGy.gif";
  if (filmData) {
    backgroundImageUrl = getFilmImageClass(filmData.title);
  }


return (
    <>
      {filmData ? (
        <div className="wrapper">
          <div className="film-card" >
            <img className="film-card-img" style={{backgroundImage: `url(${backgroundImageUrl})`}}/>
          </div>
          <div className="content">
            
            <ul>
              <li>
                <h4>{filmData.title}</h4>
              </li>
              <li>
                <p className="director">{filmData.director} - {filmData.release_date}</p>
              </li>
              <li>
                <p>{filmData.opening_crawl}</p>
              </li>
              <li>
                <p>{filmData.characters.name}</p>
              </li>
            </ul>
            
            
          </div>
          
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}