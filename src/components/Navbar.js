import React, {useState} from "react"
import './Navbar.css';
import {   BiChevronRight } from "react-icons/bi";
import {   Link } from "react-router-dom";
import {FaBars} from "react-icons/fa"

import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false)


  const closeMobileMenu = () => setIsNavShowing(false)
  return (
  
  <nav className="navbar">
      <div className="container">
      <div className="nav-container">
<Link   to='/' className="logo">
  HOTELING
</Link>      
    
      <ul className={`nav-menu ${isNavShowing ? 'show-nav' : 'hide-nav'  }`}>
   
               <li>
                 <Link to='/' onClick={closeMobileMenu}>Home</Link>
              
               </li>

               <li>
               
                 <Link to='/about'onClick={closeMobileMenu}>About</Link>
             
               </li>

               <li>
               
                 <Link to='/gallery'onClick={closeMobileMenu}>Gallery</Link>
          
               </li>

               <li>
            
                 <Link to='/destination'onClick={closeMobileMenu}>Destination</Link>
             
               </li>

               <li>
               
                 <Link to='/blog' onClick={closeMobileMenu}>Blog</Link>
               
               </li>

               <li>
              
                 <Link to='/testimonial'onClick={closeMobileMenu}>Testimonial</Link>
               
               </li>

               <li>
              
            
              <Link to='/contact'onClick={closeMobileMenu}>Contact Us</Link>
            </li>
           </ul>

           <div className="login-area">
                  <article>
                  <Link to="sign">Sign in</Link>


                 <BiChevronRight />
                  </article>  
                  <article>
                  <Link to='login'>Log in</Link>
                 <BiChevronRight />
                  </article>  
                  <button className="menu-icons" onClick={() => setIsNavShowing(!isNavShowing)}>
          { isNavShowing ?  <MdOutlineClose /> : <FaBars />}
          </button>
           </div>
           </div>
      </div>
  </nav>

  );
}

export default Navbar;