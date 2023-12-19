
import '../components/About.css';

import  Head from '../components/Head';
import  Aboutpart from '../components/Aboutpart';
import Img from "../Images/dest-1.jpg";

function About() {
  return (
  
  
  <section className="about">
  <Head />
       <Aboutpart/> 
        <div className='container'>
            <div className='about-container-2'>
            <article className='about-img'>
                    <img src={Img}  alt="about-img"   />
                    
                 </article>
                 <article className='about-txt'>
                    <span className="subtitle">About Us</span>
                    <h2>We <span> provide Solution</span> to grow your business</h2>
                <p>

    Lorem ipsum dolor sit amet consectetur adipisicing elit.  vel sint aliquid iste mollitia, exercitationem  ab quisquam. Ex velit debitis nihil!

                </p>

                <p>

Lorem ipsum dolor sit amet consectetur adipisicing elit.  vel sint aliquid iste mollitia, exercitationem praesentium sapiente suscipit accusamus ab quisquam. Ex velit debitis nihil!

            </p>

                
                 </article>
               
            </div>
        </div>
    </section>
     
    
  );
}

export default About;