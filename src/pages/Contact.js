import '../components/Contact.css';

import { ImFacebook} from "react-icons/im";
import { ImTwitter} from "react-icons/im";
import { AiOutlineInstagram} from "react-icons/ai";
import { AiFillYoutube} from "react-icons/ai";
import Head from "../components/Head"



const   Contact = () => {
  return (
    <section className="contact">
  <Head />
        <div className='container'>
        <div className='contact-container'>
            <form className="contact-form">
            <div className="top">
            <div className="input-box">
                  <span className="details">First Name</span>
                  <input type="text" placeholder="Enter your name" required />
                </div>

                <div className="input-box">
                  <span className="details">Last Name</span>
                  <input type="text" placeholder="Enter your name" required />
                </div>

                 <div className="input-box">
                  <span className="details">Full Name</span>
                  <input type="text" placeholder="Enter your name" required />
                </div>

                <div className="input-box">
                  <span className="details">Full Name</span>
                  <input type="text" placeholder="Enter your name" required />
                </div>

                <div className="input-box">
                  <span className="details">Full Name</span>
                  <input type="text" placeholder="Enter your name" required />
                </div>

                <div className="input-box">
                  <span className="details">Full Name</span>
                  <input type="text" placeholder="Enter your name" required />
                </div>
            </div>
               

                 <div className="input-box">
                    <textarea  rows="4" cols="50">

                    </textarea>
                </div>

                <button className="btn">
                  Submit
                </button>
            </form>

            <article className='contact-info'>
                <div>
                  <h5> Contact us</h5>
                  <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorem omnis officia
                  </p>
                </div>
                <div>
                <h5> Message us</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorem omnis officia
                  </p>
                </div>
                <div>
                <h5> Fallow us</h5>
                          <div className='contact-icons'>
                              <span><ImFacebook  /></span>  
                              <span><ImTwitter /></span>   
                              <span>   <AiOutlineInstagram /></span>   
                              <span>   <AiFillYoutube /></span>   
                          </div>
                </div>
            </article>
            </div>
        </div>
    </section>
  
   
  );
}

export default  Contact;