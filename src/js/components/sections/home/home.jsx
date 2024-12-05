import React, { useRef, useState } from "react";
import { Cards } from "../../itemCards/cards.js";
import "./home.css";

export const Home = () => {
   
    const itemsRef = useRef(null);
    const [ isMouseDown, setIsMouseDown ] = useState(false);
    const [ startX, setStartX ] = useState(0);
    const [ scrollLeft, setScrollLeft ] = useState(0);

    const handleMouseDown = (e) => {
        setIsMouseDown(true);
        setStartX(e.pageX - - itemsRef.current.offsetLeft);
        setScrollLeft(itemsRef.current.scrollLeft);
    }

    const handleMouseLeave= () => {
        setIsMouseDown(false)
    }

    const handleMouseUp = () => {
        setIsMouseDown(false)
    }

    const handleMouseMove = (e) => {
        if(!isMouseDown) return;
        e.preventDefault();
        const firstPosition = e.pageX - (itemsRef.current.offsetLeft);
        const pasos = (firstPosition - startX)*0.8;
        itemsRef.current.scrollLeft = scrollLeft - pasos;
    }

    return (
        <div className="list-items" ref={itemsRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}>
            <Cards />
        </div>
    );
};