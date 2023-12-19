import '../components/Home.css';

import {Outlet } from "react-router-dom"

import  Hero from '../components/Hero';
import  Aboutpart from '../components/Aboutpart';
import    Mostpopular from '../components/Mostpopular';
import    Logo from '../components/Logo';


const  Home = () => {
  return (
    <div>
    <Outlet />
      <Hero />
      <Aboutpart />
      <Mostpopular />
      <Logo />
     

    </div>
  
   
  );
}

export default Home;