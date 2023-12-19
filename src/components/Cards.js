
import PopularData from"../data/popData"
import {   AiFillStar } from "react-icons/ai";
import {  BiMap } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";


  // import Swiper styles
  import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import './Mostpopular.css'
const Cards = () => {
    return(
        
       <Swiper  spaceBetween={20} navigation={true} modules={[Navigation]} 
       breakpoints={{
        0: {
            slidesPerView:1,
            spaceBetween:10,
        },
        480: {
            slidesPerView:1,
            spaceBetween:10,
        },

        768: {
            slidesPerView:3,
            spaceBetween:10,
        },
       }}
       className="mySwiper">
        {
            PopularData.map((value) => {
                return(
                    
                   <SwiperSlide>
                         <div className="card">
                            <div className="card-img">
                                  <img src={value.image}  alt='card-img' />
                                  <span className="country">
                                  <BiMap /> {value.country}
                                  </span>
                            </div>
                            <div className="rating">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            </div>

                            <div className="info">
                                 <h3>{value.name}</h3>
                                 <span className="border"></span>
                                 <span className="price">
                                 {value.price} / <p>per night</p>

                                 </span>

                            </div>
                         </div>
                         </SwiperSlide>
                )
            })
        }
       </Swiper> 
    )
}

export default Cards