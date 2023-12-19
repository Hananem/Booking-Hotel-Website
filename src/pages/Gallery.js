import React, {useState} from "react"
import '../components/Gallery.css';
import GalleryData from"../data/GalleryData"
import {  BsBoxArrowUpRight } from "react-icons/bs";
import Head from "../components/Head"

const Gallery = () => {

  const [popup, setPopup] = useState(false) 

  const toggleModal = () =>{
    setPopup(!popup)
  }
  return (
    <section className="gallery"> 
    <Head />
        <div  className="container">
            <div  className=" gallery-container">
                    {
                        GalleryData.map((value) => {
                            return(
                                <article className="gallery-item">
                                  <div className="gallery-img">
                                        <img src={value.image} alt=" gallery-img"  className="img"   />
                                        <div  className="overlay">
                                        <BsBoxArrowUpRight onClick={toggleModal} />
                                              

                                        </div>
                                  </div>
                                  <h4>{value.title} </h4>
                                     
                                     {popup && (
                                      <div className='popup'>
                                      <div className='hide'></div>
                                      <div className="popup-content">
                                           <button  onClick={toggleModal}>close</button>
                                        <img src={value.image} alt="gallery-img" className="popup-img" />

                                      </div>
                                  </div>
                                     )}
                                 
                                </article>
                            )
                        })
                    }
            </div>
        </div>
    </section>
  );
}

export default Gallery;
