import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./../../../../styles/details-styles.css";
import { getStarshipsImageClass } from "../../../../../img/resourcesImg.js";

export const StarshipsDetails = () => {

  const params = useParams()
  const [starshipsData, setStarshipsData] = useState();

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/starships/${params.id}`)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Error al obtener la información");
        }
        return resp.json();
      })
      .then((respJson) => {
        setStarshipsData(respJson.result.properties);
      })
      .catch((err) => console.error(err));
  }, [params.id]);

  let backgroundImageUrl = "https://i.gifer.com/1UGy.gif";
  if (starshipsData) {
    backgroundImageUrl =  getStarshipsImageClass(starshipsData.name);
  }


  return (
    <>
      {starshipsData ? (
        <div className="wrapper">
          <div className="card-description">
            <div className="film-img" style={{ backgroundImage: `url(${backgroundImageUrl})` }} />
            <div className="details-description">
              <ul>
                {Object.entries(starshipsData).map(([key, value]) => (
                  value !== "people" ?
                  <li key={key}>
                    <p><strong style={{ opacity: 0.3 }}>{key}:</strong> {value}</p>
                  </li>
                  : "" 
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