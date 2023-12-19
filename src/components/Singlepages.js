import React from "react"
import {   Link } from "react-router-dom";
import {   useParams } from "react-router-dom";
import './Singlepages.css';
import products from"../data/DestData"


const Singlepages = () => {
  const {destinationId} = useParams()
  const destination = products.find((destination) => destination.id === destinationId)
  return (
    <section >
    <div className="dest-container">
    <img src={destination.image} />
      <Link to='destination' className='btn back-btn' >
          Back
        </Link>
      <h2>{destination.title}</h2>
      <p className="content">{destination.content}</p>
      <p className="content">{destination.content}</p>
    </div>
    </section>
  );
};

export default Singlepages;
