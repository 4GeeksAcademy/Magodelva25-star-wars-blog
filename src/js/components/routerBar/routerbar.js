import React from 'react';
import "./routerbar.css";
import { Link } from "react-router-dom";

export const Routerbar = () => {
  return (
    <div className='handler-bar'>
        <Link to="/"><i className='fa-solid fa-home'></i></Link>
        <Link to="/films"><i className='fa-solid fa-film'></i></Link>
        <Link to="/planets"><i className="fa-solid fa-earth-europe"></i></Link>
    </div>
  )
}