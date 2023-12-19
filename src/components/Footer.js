
import {  GoCalendar } from "react-icons/go";



import './Footer.css'
const Footer = () => {
    return(
      <section className="footer">
         <div className="container">
         <div className="footer-container">
             <article>
                <h4>ABOUT US</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorem omnis officia exercitationem, </p>
             </article>
             <article>
             <h4>NAVIGATION</h4>
               <div className="footer-links">
                <a>Home</a>
                <a>About us</a>
                <a>Category</a>
                <a>Destination</a>
                <a>Blog</a>
               </div>
             </article>
             <article>
             <h4>RECENT POSTS</h4>
             
                 <span>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
                   <p> <GoCalendar />9 October 2022</p>
                 </span>

                 <span>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
                   <p> <GoCalendar />9 October 2022</p>
                 </span>
             </article>
             <article>
             <h4>NEWSLETTER</h4>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorem </p>
                <form>
                  <input type="text"   />
<button className="btn">submit</button>
                </form>
             </article>
          </div>
         </div>
      </section>
    )
}

export default Footer