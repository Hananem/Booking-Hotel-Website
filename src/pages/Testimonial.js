import React from "react"
import '../components/Testimonial.css';
import TestimonialData from"../data/TestimonialData"
import Head from "../components/Head"

const Testimonial = () => {

 
  return (
 < section className="testimonial">
 <Head/>

        <div  className="container">
       < div className="testimonial-container">
            { TestimonialData.map((value) => {
            return(
                  
                    <article className="testimonial-item">
                                     
                        <div className="info">
                                 
                            <img src={value.image} alt="blog-img"  className="img"   />
                         
                          <div>
                         <h5 className="name">{value.name}</h5>
                         <span className="job">{value.job}</span>

                          </div>
</div>
                                <p>{value.paragraph}</p>

                           
                                
                                     
                                    
                                 
                                </article>
                  

                            )
                        })
                    }

        </div>
        </div>
</section>

  );
}

export default Testimonial;