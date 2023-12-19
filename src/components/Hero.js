import './Hero.css';
import { Swiper, SwiperSlide } from "swiper/react";


  // import Swiper styles
  import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

import Slide1 from "../Images/slider-1.jpg";
import Slide2 from "../Images/slider-2.jpg";
import Slide3 from "../Images/slider-3.jpg";



const  Home = () => {
  return (
    
         <Swiper spaceBetween={50} navigation={true} modules={[Navigation]} slidesPerView={1} className="mySwiper">
        <SwiperSlide  >
        <div  className='slide slide2' >

        <form className='slide-form'>
        <div>
          <h3>Enjoy Your Holiday</h3>
          <p>Search and Book Hotel</p>
        </div>
        <input type="text" placeholder="Search City"></input>
          <div className='d-flex'>
        <input type="text" placeholder="Check In"></input>
        <input type="text" placeholder="Check Out"></input>

          </div>

          <div className='d-flex'>
        <input type="text" placeholder="Adult(s)(+18)"></input>
        <input type="text" placeholder="Children(0  -  17)"></input>

          </div>
          <div >
        <input type="text" placeholder="Rooms"></input>
        <input type="submit" value='Search' className="submit"></input>
       
          </div>
         
        </form>
        <img src={Slide2} />
        </div>
          
        </SwiperSlide>
        <SwiperSlide className='slide slide2' >
        <div  className='slide slide2' >
        <img src={Slide1} />
        </div>
        </SwiperSlide>
        <SwiperSlide >
        <div  className='slide slide2' >
        <img src={Slide3} />

        </div>


        </SwiperSlide>
      
      </Swiper>
   
  );
}

export default Home;