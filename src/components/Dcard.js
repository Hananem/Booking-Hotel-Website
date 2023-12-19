import React from "react"
import {   Link } from "react-router-dom";

import './Destination.css';
import { BiLinkExternal } from "react-icons/bi";


const Dcard = ({item: {id, image, title}}) => {

                            return(
                                <article className="destination-item" >
                                  <div className="Dest-img">
                                        <img src={image} alt="destination-img"  className="img"   />
                                        <div  className="overlay">
                                        <Link to={`/singlepage/${id}`}>
                                        <BiLinkExternal   />
                                        </Link>

                                        </div>
                                  </div>
                                  <h4>{title} </h4>
                  </article>
                            )
}

export default Dcard;