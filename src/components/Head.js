import './Head.css';
import Img from "../Images/image-heading.jpg";
import React from 'react';
import { useLocation } from "react-router-dom"

const Head = () => {
    const location = useLocation()
    return(
        <div className="head" >
          <div  className="container">
             <h2 className="head-title">{location.pathname.split( "/" )[ 1 ]}</h2>

          </div>

          <img src={Img}  />
        </div>
    )
}

export default Head;