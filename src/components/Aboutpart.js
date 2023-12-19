import './About.css';
import {  AiOutlineArrowRight } from "react-icons/ai";

import Img from "../Images/about-img-1.jpg";





const  Aboutpart = () => {
  return (
    <section>
        <div className='container'>
            <div className='about-container'>
                 <article className='about-txt'>
                    <span className="subtitle">About Us</span>
                    <h2>We <span> provide Solution</span> to grow your business</h2>
                <p>

    Lorem ipsum dolor sit amet consectetur adipisicing elit.  vel sint aliquid iste mollitia, exercitationem  ab quisquam. Ex velit debitis nihil!

                </p>

                <p>

Lorem ipsum dolor sit amet consectetur adipisicing elit.  vel sint aliquid iste mollitia, exercitationem praesentium sapiente suscipit accusamus ab quisquam. Ex velit debitis nihil!

            </p>

            <a href='#/' className="btn">Explore More   <AiOutlineArrowRight />  </a>
                
                 </article>
                 <article className='about-img'>
                    <img src={Img}  alt="about-img"   />
                    
                 </article>
            </div>
        </div>
    </section>
        
  );
}

export default Aboutpart;