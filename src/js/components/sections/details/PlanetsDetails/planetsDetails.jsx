import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./../../../../styles/details-styles.css";
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
        <div className="card-description">
          <div className="film-img" style={{ backgroundImage: `url(${backgroundImageUrl})` }}/>
          <div className="details-description">
          <ul>
            {Object.entries(planetData).map(([key, value]) => (
                  <li key={key}>
                    <p><strong style={{opacity: 0.3}}>{key}:</strong> {value}</p> 
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </>
  )
}