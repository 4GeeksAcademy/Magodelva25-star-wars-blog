import React from 'react'
import "./navbar.css"
import { Link } from "react-router-dom";
import SW_Logo from "./../../../img/SW_Logo.png"


export const NavBar = () => {
  return (
    <nav className='header'>
          
          <Link to="/">People</Link>
          <Link to="/films">Films</Link>
          <Link to="/planets">Planets</Link>
            <div className='logo'>
              <img src={SW_Logo} />
            </div>
          <Link to="/starships">Starships</Link>
          <Link to="/species">Species</Link>
          <Link to="/fav">Favourites</Link>
    </nav>
  )
}