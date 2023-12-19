
import './App.css';
import  Navbar from './components/Navbar';
import  Home from './pages/Home';
import  About from './pages/About';
import  Gallery from './pages/Gallery';
import  Destination from './pages/Destination';
import  Blog from './pages/Blog';
import  Testimonial from './pages/Testimonial';
import  Contact from './pages/Contact';
import  Singlepages from './components/Singlepages';
import  BlogSinglePage from './components/BlogSinglePage';
import  Sign from './components/Sign';
import  Login from './components/Login';
import    Footer from './components/Footer';

import { Routes, Route, } from "react-router-dom"
function App() {
  return (
    <div className="App">
   
    <Navbar />
    
 
 
       <Routes>
         <Route path='/'  element ={<Home />} />
         <Route path='about'  element ={<About />}  />
         <Route path='gallery'  element ={<Gallery />}  />
         <Route path='destination'  element ={<Destination />}  /> 
         <Route path='destination/:destinationId'  element ={<Singlepages />}  />

         <Route path='/blog'  element ={<Blog />}  ></Route>
         <Route path='/blog/:blogId'  element ={<BlogSinglePage />}  ></Route>
         <Route path='/testimonial'  element ={<Testimonial />}  ></Route>
         <Route path='/contact'  element ={<Contact />}  ></Route>
         <Route path='/sign'  element ={<Sign />}  ></Route>
         <Route path='/login'  element ={<Login />}  ></Route>
       </Routes>
       <Footer />
    </div>
  );
}

export default App;
