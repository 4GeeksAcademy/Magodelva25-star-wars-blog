import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./planetsDetails.css";
import { getPlanetsImageClass } from "./../../../../../img/resourcesImg.js";

export const PlanetDetails = () => {

  const params = useParams()
  const [planetData, setPlanetData] = useState();

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/planets/${params.id}`)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Error al obtener la información");
        }
        return resp.json();
      })
      .then((respJson) => {
        setPlanetData(respJson.result.properties);
      })
      .catch((err) => console.error(err));
  }, [params.id]);

  let backgroundImageUrl = "https://i.gifer.com/1UGy.gif";
  if (planetData) {
    backgroundImageUrl = getPlanetsImageClass(planetData.name);
  }


return (
    <>
      {planetData ? (
        <div className="wrapper">
          <div className="film-card" >
            <img className="film-card-img" style={{backgroundImage: `url(${backgroundImageUrl})`}}/>
          </div>
          <div className="content">
            <ul>
                <li><h4>{planetData.name}</h4></li>
                <li>{planetData.population}</li>
                <li>{planetData.terrain}</li>
                <li>{planetData.diameter}</li>
                <li>{planetData.population}</li>
            </ul>   
          </div>
          
        </div>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </>
  )
}