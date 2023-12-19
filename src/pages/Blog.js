import React, {useState} from "react"

import '../components/Blog.css';
import BlogData from"../data/BlogData"
import Head from "../components/Head"


import {Link} from 'react-router-dom'

const Blog = () => {

  
  return (
    <section className="blog"> 
    <Head/>
        <div  className="container">
            <div  className="blog-container">
                    {
                        BlogData.map((value) => {
                            return(
                    <Link to={`/blog/${value.id}`} >

                                <article className="blog-card">
                                  <div className="blog-img">
                                        <img src={value.image} alt="blog-img"  className="img"   />
                                
                                  </div>
                                  <div className="blog-info">
                                  <div>
                                  <small className="date">{value.date} </small>
                                  </div>
                                
                                  <h3>{value.title} </h3>
                                  <p>{value.paragraph}</p>
                                  </div>
                                     
                             
                                 
                                </article>
        </Link>

                            )
                        })
                    }
            </div>
        </div>
    </section>
  );
}

export default Blog;