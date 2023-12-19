import React from "react"
import {   Link } from "react-router-dom";
import {   useParams } from "react-router-dom";
import './Singlepages.css';
import BlogData from  "../data/BlogData"
import "./Blog.css"

const BlogSinglepage = () => {
  const {blogId} = useParams()
  const blog =BlogData.find((blog) => blog.id === blogId)
  return (
    <section >
    <div className="dest-container">
    <img src={blog.image} />
      <Link to='blog' className='btn back-btn' >
          Back
        </Link>
      <h2  className="blog-title">{blog.title}</h2>
      <p className="content">{blog.content}</p>
      <p className="content">{blog.content}</p>
    </div>
    </section>
  );
};

export default BlogSinglepage;