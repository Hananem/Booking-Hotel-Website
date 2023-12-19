import React from "react"
import {Link} from 'react-router-dom'
import '../components/Destination.css';
import products from"../data/DestData"
import Head from "../components/Head"

import DestinationCards from "../components/DestinationCards"

const Destination = () => {
  return (
    <>
      <section className='destination'>
      <Head/>
      <div className="container">
       <h1>Most Popular Destination</h1>
       <div className="destination-container">
            {
              products.map((destination) => {
                return(
              <DestinationCards destination={destination}/>
                   
                )
              })
            }
        </div>
        </div>
      </section>
    </>
  );
 
}

export default Destination;
