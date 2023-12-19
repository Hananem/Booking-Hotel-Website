
import LogoData from"../data/LogoData"
import { Swiper, SwiperSlide } from "swiper/react";

  // import Swiper styles
  import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import './Logo.css'
const Logo = () => {
    return(
        
       <Swiper  spaceBetween={20} navigation={true} modules={[Navigation]}     
       breakpoints={{
        0: {
            slidesPerView:1,
            spaceBetween:10,
        },
        480: {
            slidesPerView:2,
            spaceBetween:10,
        },

        768: {
            slidesPerView:3,
            spaceBetween:10,
        },}} 
        className="mySwiper logo">
      <div className="container">

        {
            LogoData.map((value) => {
                return(
                    
                   <SwiperSlide>
                        
                            <div className="logo-img">
                                  <img src={value.image}  alt='logo-img' />
                                 
                            </div>
                          
                         </SwiperSlide>
                )
            })
        }

        </div>
       </Swiper> 
    )
}

export default Logo