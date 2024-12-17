import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./characterDetails.css";
import { getPeopleImageClass } from "./../../../../../img/resourcesImg.js";

export const CharDetails = () => {

  const params = useParams()
  const [peopleData, setPeoplemData] = useState();

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/people/${params.id}`)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Error al obtener la información");
        }
        return resp.json();
      })
      .then((respJson) => {
        setPeoplemData(respJson.results.properties);
      })
      .catch((err) => console.error(err));
  }, [params.id]);

  let backgroundImageUrl = "https://i.gifer.com/1UGy.gif";
  if (peopleData) {
    backgroundImageUrl = getPeopleImageClass(peopleData.name);
  }


return (
    <>
      {peopleData ? (
        <div className="wrapper">
          <div className="film-card" >
            <img className="film-card-img" style={{backgroundImage: `url(${backgroundImageUrl})`}}/>
          </div>
          <div className="content">
            
            <ul>
              <li>
                <h4>{peopleData.name}</h4>
              </li>
              <li>
                <p>{peopleData.gender} - {peopleData.height} - {peopleData.hair_color} </p>
              </li>
              <li>
                <p>{peopleData.homeworld}</p>
              </li>
            </ul>
                      
          </div>
          
        </div>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </>
  )
}