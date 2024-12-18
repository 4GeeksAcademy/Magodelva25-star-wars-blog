import React, { useRef, useState, useContext } from "react";
import { Cards } from "../../Cards/cards.jsx";
import { Context } from "../../../store/appContext.js";
import "./../../../styles/common-styles.css";

export const Planets = () => {

  const { store } = useContext(Context);

  const itemsRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - - itemsRef.current.offsetLeft);
    setScrollLeft(itemsRef.current.scrollLeft);
  }

  const handleMouseLeave = () => {
    setIsMouseDown(false)
  }

  const handleMouseUp = () => {
    setIsMouseDown(false)
  }

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const firstPosition = e.pageX - (itemsRef.current.offsetLeft);
    const pasos = (firstPosition - startX) * 0.8;
    itemsRef.current.scrollLeft = scrollLeft - pasos;
  }

  return (
  
          <div className="list-items" ref={itemsRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}>
              {
                  store.planets.map((planet) => {
                      return (
                          <Cards
                              key={`planet-${planet.uid}`}
                              uid={planet.uid}
                              type="planet"  
                              name={planet.name}
                              link={`/planets/${planet.uid}`}
                              function={""}  
                          />
                      );
                  })
              }
          </div>
  
      );
  }

