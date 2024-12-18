import React from 'react'
import "./footer.css";
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className='footer'>
        <p>2024</p> - <img src='https://www.animatedimages.org/data/media/636/animated-star-wars-image-0097.gif'></img> - <Link to="" ><i class="fa-brands fa-github"></i></Link>
    </footer>
  )
}
